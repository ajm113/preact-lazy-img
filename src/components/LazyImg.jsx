import {h, Component} from 'preact';
import LazyWrapper from './LazyWrapper';
import { debounce } from '../utils/debounce';

const PLACEHOLDER_DIV_CLASSNAME = 'lazyload-placeholder';

export default class LazyImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.el = null;
    }

    onWindowScaleEvent = (e) => {
        debounce(() => {
            this.setState({
               visible: this.isInViewport()
            });
        }, 50)();
    }

    // If the component is invisable no need to update it.
    shouldComponentUpdate = () => this.state.visible;

    render({...props}, {visible}) {

        const placeholder = props.placeholder ?
            props.placeholder :
            <div style={{ height: props.height }} className={PLACEHOLDER_DIV_CLASSNAME} />;

        return (
            <LazyWrapper onWindowScroll={this.onWindowScaleEvent} onWindowResize={this.onWindowScaleEvent} >
                <img {...props} ref={el => this.el = el} />
            </LazyWrapper>
        );
    }

    componentDidMount() {
        this.setState({
           visible: this.isInViewport()
        });
    }

    isInViewport() {
        if (!this.el) {
            return false;
        }

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
