import {h, Component, cloneElement} from 'preact';
import { debounce, isInViewport } from './utils';
import LazyImg from './LazyImg';

const EVENT_LISTEN_OPTIONS = false;

const WRAPPER_DIV_CLASSNAME = 'lazyload-wrapper';

export default class LazyImgWrapper extends Component {

    windowEvents = ['scroll', 'resize', 'touchmove'];

    static displayName = 'LazyImgWrapper';

    refs = {
        wrapper: null,
        children: []
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    windowChangeEvent = e => {
        return debounce(() => {
            const visible = isInViewport(this.refs.wrapper, this.props.cushion);

            this.setState({
                visible: visible
            });

            if(this.state.visible && this.refs.children)
                this.refs.children.map(c => {
                    c.checkIfImgIsInView();
                });


        }, 100)(e);
    }

    shouldComponentUpdate = () => this.state.visible

    render({className, placeholderIfInvisible, cushion, placeholder, children}) {

        const mergedClassName = WRAPPER_DIV_CLASSNAME + ' ' + className;

        return (
            <div className={mergedClassName} ref={(el) => this.refs.wrapper = el}>
                {(children.map((child, index) => {
                    const mergedProps = (child.nodeName.hasOwnProperty('displayName')
                        && child.nodeName.displayName  == LazyImg.displayName) ?
                            {
                                placeholder: placeholder,
                                cushion: cushion,
                                placeholderIfInvisible: placeholderIfInvisible,
                                ref: (el) => { this.refs.children[index] = el;  }
                            }
                            : {};

                    return cloneElement(child, mergedProps);
                }))}
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            visible: isInViewport(this.wrapperEl, this.props.cushion)
        });

        if(this.state.visible && this.refs.children)
            this.refs.children.map(c => {
                c.checkIfImgIsInView();
            });

        this.windowEvents.map(e => window.addEventListener(e, this.windowChangeEvent, EVENT_LISTEN_OPTIONS))
    }

    componentWillUnmount() {
        this.windowEvents.map(e => window.removeEventListener(e, this.windowChangeEvent, EVENT_LISTEN_OPTIONS))
    }

    static defaultProps = {
        cushion: 0,
        placeholderIfInvisible: true,
        className: '',
        placeholder: null
    }
}
