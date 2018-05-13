import {h, Component} from 'preact';
import { debounce, isInViewport } from './utils';

const PLACEHOLDER_DIV_CLASSNAME = '';

export default class LazyImg extends Component {

    static displayName = 'LazyImg';

    state = {
        visible: false
    };

    constructor(props) {
        super(props);

        this.el = null;
    }

    checkIfImgIsInView() {
        if(!this.el) return;

        this.setState({
            visible: isInViewport(this.el, this.props.cushion)
        });
    }

    shouldComponentUpdate ({}, {visible}) {
        return (visible !== this.state.visible);
    }

    render(props) {
        const mergedClassName = 'lazyload-placeholder ' + props.className;

        const placeholder = (props.placeholder) ?
            props.placeholder :
            (<div {...props} style={{ height: props.height }} className={mergedClassName} ref={(el) => this.el = el} />);

        return this.state.visible ?
            <img {...props} ref={(el) => this.el = el} /> :
            placeholder;
    }

    componentDidMount() {
        this.checkIfImgIsInView();
    }

    static defaultProps = {
        className: '',
        el: null,
        cushion: 0,
        placeholderIfInvisible: true,
        placeholder: null
    }
}
