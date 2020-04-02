// elm variables
const topareaElm = document.querySelector('section.toparea');
const scrollingTopareaElm = document.querySelector('section.toparea-scrolling');

// check for toparea scroll (show scrolling or top toparea depending on current scroll position)

(() => {
    const checkTopareaScroll = () => {
        const topareaHeight = topareaElm.offsetTop + topareaElm.offsetHeight;
        const scrollingTopareaHeight = remToPx(4);
        if (window.pageYOffset >= topareaHeight) {
            if (!scrollingTopareaElm.classList.contains('fadeInDown')) {
                scrollingTopareaElm.classList.add('active');
                scrollingTopareaElm.classList.remove('fadeOutUp');
                scrollingTopareaElm.classList.add('fadeInDown');
                topareaElm.classList.remove('active');
            }
        } else if (window.pageYOffset < topareaHeight + scrollingTopareaHeight) {
            if (!scrollingTopareaElm.classList.contains('fadeOutUp')) {
                topareaElm.classList.add('active');
                scrollingTopareaElm.classList.remove('fadeInDown');
                scrollingTopareaElm.classList.add('fadeOutUp');
                setTimeout(() => {
                    if (scrollingTopareaElm.classList.contains('fadeOutUp')) {
                        scrollingTopareaElm.classList.remove('active');
                    }
                }, 500);
            }
        }
    };

    window.addEventListener('scroll', checkTopareaScroll);
    window.addEventListener('load', checkTopareaScroll);
})();
