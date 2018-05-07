import {h, Component} from 'preact';
import { debounce } from '../utils/debounce';

const OPTIONS = {passive: true};

export default class LazyWrapper extends Component {

    update = e => {
        switch(e.type) {
            case 'scroll':
                if(this.props.onWindowScroll)
                   return debounce(this.props.onWindowScroll, 50)(e);
            case 'resize':
                if(this.props.onWindowResize)
                   return debounce(this.props.onWindowResize, 50)(e);
        }
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
