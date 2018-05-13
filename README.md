# preact-lazy-img
![STATUS](https://img.shields.io/badge/Status-WIP-orange.svg) 
[![Build Status](https://travis-ci.org/ajm113/preact-lazy-img.svg?branch=master)](https://travis-ci.org/ajm113/preact-lazy-img)


*Lazy load images when the user scrolls over them.*

**NOTE: DO NOT USE IN PRODUCTION! STILL WORK IN PROGRESS!!!!**

Foundation based on [react-lazy](https://github.com/Merri/react-lazy)

## Install

```shell
    $ npm install preact-lazy-img
```

## Usuage Example:

```js

import {LazyImg, LazyImgWrapper } from 'preact-lazy-img';

<LazyImgWrapper>
    <LazyImg src='/asset/myimage.png'>
</LazyImgWrapper>

```

```css
.lazyload-placeholder {
    background: gray;
    height: 300px;
    width: 300px;
    display: inline-block;
}
```

## Todos:

- [x] Implement Travis CI.
- [ ] Write more unit tests surrounding LazyImg and LazyImgWrapper.
- [ ] Create CodePen Demo.
- [ ] Allow child LazyImg props to be overwrite parent LazyImgWrapper.
- [ ] Write more documentation around available props.
- [ ] Upgrade to Webpack 4. **(low)**

## Credits
- Preact
- Babel
- Eslint
- Jest
- Enzyme
- Webpack

## License

[MIT](LICENSE)
