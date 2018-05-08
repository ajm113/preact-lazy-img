(function() {
    const {Component, h, render} = window.preact;
    const {LazyImg} = window.preactLazyImg;

    const Placeholder = (props) => {
        return h('img', props);
    };

    class App extends Component {
        render() {
            return (
                h('div', {id: 'lazyApp'},
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300})
                )
            );
        }
    }



    render(h(App), document.getElementById('app'));
})();
