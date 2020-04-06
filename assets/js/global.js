// code for this function was taken from user etham on https://stackoverflow.com/questions/36532307/rem-px-in-javascript
const remToPx = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

// remove loading from body when loaded
setTimeout(() => {
    document.querySelector('body').classList.remove('loading');
}, 250);
