# dialog.js
alert, prompt, confirm but async and stylable

# Features
- alert(), prompt() and confirm() are API-compatible but async.
- Uses native Dialog-Element (polyfill here:https://github.com/nuxodin/dialog-polyfill)
- Stylable
- Lightweight

# Ussage

```html
<script type=module>
    import {alert, prompt, confirm} from 'https://jsdelivr.net/gh/u1ui/dialog.js@x.x.x/dialog.js';

    const name = await prompt('What is your name?', 'John Doe');
</script>
```
## Demo
https://raw.githack.com/u1ui/dialog.js/main/tests/test.html  

