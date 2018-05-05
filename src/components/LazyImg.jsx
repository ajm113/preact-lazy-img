import Preact from 'preact';

const PLACEHOLDER_DIV_CLASSNAME = 'lazyload-placeholder';

export default class LazyImg extends Preact.Component {
    constructor(props) {
        this.state = {

        }
    }

    // If the component is invisable no need to update it.
    shouldComponentUpdate = () => this.state.visible;

    render({...props}, {visible}) {
        return this.visible ?
            <img ref={(el) => this.el = el; } {...props} /> :
            props.placeholder ?
                props.placeholder :
                    (<div className={{ props.height }} style={PLACEHOLDER_DIV_CLASSNAME}>);
    }

    checkIfInViewport() {
        if(!this.el)
            return false;

        const top = this.el.getBoundingClientRect().top;
        return ((top + this.prop.cushion) >= 0 && (top - this.prop.cushion <= window.innerHeight));
    }

    static defaultProps = {
        cushion: 0,
        visible: true,
        placeholder: '',
        unmountIfInvisible: true
        placeholderIfInvisible: true
    }
}
