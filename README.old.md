# dialog.js
`alert, prompt, confirm` but async and stylable

# Features
- alert(), prompt() and confirm() are API-compatible but async.
- Uses native Dialog-Element (polyfill here: https://github.com/nuxodin/dialog-polyfill)
- Minimal styled, style it yourself!
- Lightweight

# Ussage

```js
import {alert, prompt, confirm} from 'https://cdn.jsdelivr.net/gh/u1ui/dialog.js@x.x.x/dialog.min.js';

const name = await prompt('What is your name?', 'John Doe');
```
## Demos
https://raw.githack.com/u1ui/dialog.js/main/tests/minimal.html  
https://raw.githack.com/u1ui/dialog.js/main/tests/test.html  

