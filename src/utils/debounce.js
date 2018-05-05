export default (func, wait, immediate=false) => {
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
