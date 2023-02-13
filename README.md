# dialog.js
alert, prompt, confirm but async

## Features

- alert(), prompt() and confirm() are API-compatible but async.
- Uses native Dialog-Element (polyfill here: https://github.com/nuxodin/dialog-polyfill)
- Minimal styled, style it yourself!
- Lightweight

## Ussage

```html
<button onclick="u1Alert('Just a test').then(console.log)">run</button>
```

```css
:where(.\:modal, :modal) {
    box-shadow: 0 0 1rem #0008;
    border: 0;
    border-radius: .3rem;
}
```

[doc](https://doc.deno.land/https://cdn.jsdelivr.net/gh/u1ui/dialog.js@$main/dialog.js)

## Install

```js
import {dialog} from "https://cdn.jsdelivr.net/gh/u1ui/dialog.js@x.x.x/dialog.min.js"
```

## Demos

[minimal.html](http://gcdn.li/u1ui/dialog.js@main/tests/minimal.html)  
[test.html](http://gcdn.li/u1ui/dialog.js@main/tests/test.html)  

## About

- MIT License, Copyright (c) 2022 <u1> (like all repositories in this organization) <br>
- Suggestions, ideas, finding bugs and making pull requests make us very happy. ♥

