import {h, Component} from 'preact';

export default class LazyWrapper extends Component {

    handleScroll = (e) => {
        if(this.props.onWindowScroll)
            this.props.onWindowScroll(e);
    }

    handleResize = (e) => {
        if(this.props.onWindowResize)
            this.props.onWindowResize(e);
    }

    render({children, ...props}) {
        const className = 'preact-lazy-img-wrapper'
        + (props.className ? ' ' + props.className: '');

        return (<div {...props} className={className}>{children}</div>);
    }

    componentDidMount() {
        if(this.props.onWindowScroll)
            window.addEventListener('scroll', this.handleScroll);
        if(this.props.onWindowResize)
            window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        if(this.props.onWindowScroll)
            window.removeEventListener('scroll', this.handleScroll);
        if(this.props.onWindowResize)
            window.removeEventListener('resize', this.handleResize);
    }
}
