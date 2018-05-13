# preact-lazy-img (WIP)
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
