import {h, Component} from 'preact';
import { debounce } from '../utils/debounce';

const OPTIONS = {passive: true};

export default class LazyWrapper extends Component {

    windowResizeEvent = e => {
        if(this.props.onWindowResize)
           return debounce(this.props.onWindowResize, 100)(e);
    }

    windowScrollEvent = e => {
        if(this.props.onWindowScroll)
           return debounce(this.props.onWindowScroll, 100)(e);
    }

    render({children: [child]}) {
        return typeof child==='function' ? child() : child;
    }

    componentDidMount() {
        if(this.props.onWindowScroll)
            addEventListener('scroll', this.windowScrollEvent, OPTIONS);
        if(this.props.onWindowResize)
            addEventListener('resize', this.windowResizeEvent, OPTIONS);
    }

    componentWillUnmount() {
        if(this.props.onWindowScroll)
            removeEventListener('scroll', this.windowScrollEvent, OPTIONS);
        if(this.props.onWindowResize)
            removeEventListener('resize', this.windowResizeEvent, OPTIONS);
    }
}
