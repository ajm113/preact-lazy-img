export function debounce(func, wait, immediate=false) {
    let timeout = 0;

    return () => {
        let context = this, args = arguments;
        let later = () => {
            timeout = 0;

            if(!immediate)
                func.apply(context, args);
        };

        const callNow = (immediate && !timeout);

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if(callNow)
            func.apply(context, args);
    };
}

export function isInViewport(el, cushion) {
    if (!el)
        return false;

    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;
    return ((bottom + cushion) >= 0 && (top - cushion) <= window.innerHeight);
}

export const noop = () => {};
