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
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 301}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 302}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 303}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 304}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 305}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 306}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 307}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 308}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 309}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 310}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300}),
                    h(LazyImg, {src: 'https://picsum.photos/300?random', height: 300})
                )
            );
        }
    }



    render(h(App), document.getElementById('app'));
})();
