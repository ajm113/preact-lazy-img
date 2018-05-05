import {h, Component} from 'preact';

export default class LazyImgGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
    }

    static defaultProps = {
        cushion: 0,
        placeholder: '',
        unloadOnHidden: true
    }
}
