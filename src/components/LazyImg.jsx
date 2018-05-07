import {h, Component} from 'preact';
import LazyWrapper from './LazyWrapper';

const PLACEHOLDER_DIV_CLASSNAME = 'lazyload-placeholder';

export default class LazyImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.el = null;
    }

    onScrollOrResize = e => {
        console.log('wow');
        this.setState({
           visible: this.isInViewport()
        });
    }

    render({...props}, {visible}) {
        const placeholder = props.placeholder ?
            props.placeholder :
            <div ref={el => this.el = el.base} style={{ height: props.height }} className={PLACEHOLDER_DIV_CLASSNAME} />;

        return (
            <LazyWrapper onWindowScroll={this.onScrollOrResize} onWindowResize={this.onScrollOrResize} >
                { visible ? <img {...props} ref={el => this.el = el.base} /> : placeholder}
            </LazyWrapper>
        );
    }

    componentDidMount() {
        this.setState({
           visible: this.isInViewport()
        });
    }

    isInViewport() {
        if (!this.el)
            return false;

        const top = this.el.getBoundingClientRect().top;
        return ((top + this.props.cushion) >= 0 && (top - this.props.cushion) <= window.innerHeight);
    }

    static defaultProps = {
        cushion: 0,
        placeholder: '',
        unmountIfInvisible: true,
        placeholderIfInvisible: true
    }
}
