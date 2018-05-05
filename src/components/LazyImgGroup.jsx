import Preact from 'preact';

export default class LazyImgGroup extends Preact.Component {
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
