# undefined
alert, prompt, confirm but async

## Features

- alert(), prompt() and confirm() are API-compatible but async.
- Uses native Dialog-Element (polyfill here: https://github.com/nuxodin/dialog-polyfill)
- Minimal styled, style it yourself!
- Lightweight

## Ussage

```html
<button onclick="dialog.alert('Just a test').then(console.log)">run</button>
<button onclick="console.log(alert('Just a test'))">run native</button>
<br>
<button onclick="dialog.confirm('Really?').then(console.log)">run</button>
<button onclick="console.log(confirm('Really?'))">run native</button>
<br>
<button onclick="dialog.prompt('value:','100').then(console.log)">run</button>
<button onclick="console.log(prompt('value:','100'))">run native</button>
```

## Demos

https://raw.githack.com/u1ui/dialog.js/main/tests/minimal.html  
https://raw.githack.com/u1ui/dialog.js/main/tests/test.html

## Install

```html
<script src="https://cdn.jsdelivr.net/gh/u1ui/dialog.js@3.0.2/dialog.min.js" type=module>
```

## Demo

https://raw.githack.com/u1ui/dialog.js/main/tests/minimal.html  
https://raw.githack.com/u1ui/dialog.js/main/tests/test.html  

## About

- MIT License, Copyright (c) 2022 <u1> (like all repositories in this organization) <br>
- Suggestions, ideas, finding bugs and making pull requests make us very happy. ♥

