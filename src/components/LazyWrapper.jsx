import {h, Component} from 'preact';
import { debounce } from '../utils/debounce';

const OPTIONS = {passive: true};

export default class LazyWrapper extends Component {

    update = e => {
        if(this.props.onWindowScroll)
            debounce(this.props.onWindowScroll, 50)(e);
        if(this.props.onWindowResize)
            debounce(this.props.onWindowResize, 50)(e);
    }

    render({children: [child]}) {
        return typeof child==='function' ? child() : child;
    }

    componentDidMount() {
        if(this.props.onWindowScroll)
            addEventListener('scroll', this.update, OPTIONS);
        if(this.props.onWindowResize)
            addEventListener('resize', this.update, OPTIONS);
    }

    componentWillUnmount() {
        if(this.props.onWindowScroll)
            removeEventListener('scroll', this.update, OPTIONS);
        if(this.props.onWindowResize)
            removeEventListener('resize', this.update, OPTIONS);
    }
}
