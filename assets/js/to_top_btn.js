// check for scroll and show button accordingly
(() => {
    // elm variables
    const toTopBtnElm = document.querySelector('.to-top-btn');
    const topareaElm = document.querySelector('section.toparea');

    const checkToTopBtnScroll = () => {
        const topareaHeight = topareaElm.offsetTop + topareaElm.offsetHeight;
        const scrollingTopareaHeight = remToPx(4);
        if (window.pageYOffset >= topareaHeight) {
            if (!toTopBtnElm.classList.contains('zoomIn')) {
                toTopBtnElm.classList.remove('zoomOut');
                toTopBtnElm.classList.add('active');
                toTopBtnElm.classList.add('zoomIn');
            }
        } else if (window.pageYOffset < topareaHeight + scrollingTopareaHeight) {
            if (!scrollingTopareaElm.classList.contains('zoomOut')) {
                toTopBtnElm.classList.remove('zoomIn');
                toTopBtnElm.classList.add('zoomOut');

                setTimeout(() => {
                    if (toTopBtnElm.classList.contains('zoomOut')) {
                        toTopBtnElm.classList.remove('active');
                    }
                }, 500);
            }
        }
    };

    window.addEventListener('scroll', checkToTopBtnScroll);
    window.addEventListener('load', checkToTopBtnScroll);

    toTopBtnElm.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
})();
