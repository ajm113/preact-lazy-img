(function() {
    const {Component, h, render} = window.preact;
    const {LazyImg, LazyImgWrapper} = window.preactLazyImg;

    const Placeholder = (props) => {
        return h('img', props);
    };

    class App extends Component {
        render() {
            const getCacheBust = () => '&cacheBust=' + Math.random();
            return (
                h('div', {id: 'lazyApp'},
                    h(LazyImgWrapper, null,
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300}),
                        h(LazyImg, {src: 'https://picsum.photos/300?random' + getCacheBust(), height: 300})
                    )
                )
            );
        }
    }



    render(h(App), document.getElementById('app'));
})();
