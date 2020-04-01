// elm variables
const topareaElm = document.querySelector('section.toparea');
const scrollingTopareaElm = document.querySelector('section.toparea-scrolling');

// check for toparea scroll (show scrolling or top toparea depending on current scroll position)

(() => {
    const checkTopareaScroll = () => {
        const topareaHeight = topareaElm.offsetTop + topareaElm.offsetHeight;
        const scrollingTopareaHeight = remToPx(4);
        console.log('window.pageYOffset = ' + window.pageYOffset);
        console.log('topareaHeight = ' + topareaHeight);
        if (window.pageYOffset >= topareaHeight) {
            if (!scrollingTopareaElm.classList.contains('slideInDown')) {
                scrollingTopareaElm.classList.add('active');
                scrollingTopareaElm.classList.remove('slideOutUp');
                scrollingTopareaElm.classList.add('slideInDown');
                topareaElm.classList.remove('active');
                console.log('Scrolling toparea should be shown');
            }
        } else if (window.pageYOffset < topareaHeight + scrollingTopareaHeight) {
            if (!scrollingTopareaElm.classList.contains('slideOutUp')) {
                topareaElm.classList.add('active');
                scrollingTopareaElm.classList.remove('slideInDown');
                scrollingTopareaElm.classList.add('slideOutUp');
                setTimeout(() => {
                    if (scrollingTopareaElm.classList.contains('slideOutUp')) {
                        scrollingTopareaElm.classList.remove('active');
                    }
                }, 500);
                console.log('Normal toparea should be shown');
            }
        }
    };

    window.addEventListener('scroll', checkTopareaScroll);
    window.addEventListener('load', checkTopareaScroll);
})();
