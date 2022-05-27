// import 'https://cdn.jsdelivr.net/gh/nuxodin/dialog-polyfill/dialog.min.js'; // todo?

const d = document;


d.head.insertAdjacentHTML(
    'afterbegin',
    '<style>'+
    '.u1x-modal .-buttons {'+
    '   display:flex;'+
    '   flex-wrap:wrap;'+
    '   justify-content:flex-end;'+
    '   gap:.5rem;'+
    '   margin-top:1rem;'+
    '}'+
    '</style>'
);

class Dialog {
    constructor(options) {

        const tmpl = d.createElement('template');
        tmpl.innerHTML =
        '<dialog class="u1x-modal :modal">'+
        '	<form method=dialog>'+
                options.body+
                (options.buttons?'<div class=-buttons></div>':'')+
        '	</form>'+
        '</dialog>';
        const element = this.element = tmpl.content.firstChild;

        const btnCont = element.querySelector('.-buttons');
        options.buttons && options.buttons.forEach((btn, i)=>{
            const el = document.createElement('button');
            el.innerHTML = btn.title;
            el.value = btn.value;
            el.addEventListener('click', e=>{
                btn.then && btn.then.call(this,e);
            });
            btnCont.appendChild(el);
            if (i === 0) setTimeout(()=>el.focus());
        });
    }
    show(){
        const element = this.element;
        document.body.appendChild(element);
        element.showModal();
        return new Promise((resolve, reject)=>{
            element.addEventListener('close',()=>{
                resolve(this.value);
                element.remove();
            });
        });
    }
}

export function alert(text) {
    var dialog = new Dialog({
        body:htmlEntities(text),
        buttons:[{title:'OK'}]
    });
    return dialog.show();
};
export function confirm(text) {
    var dialog = new Dialog({
        body:htmlEntities(text),
        buttons:[
            {title:'OK',then(){ dialog.value = true; } },
            {title:t('Cancel')}
        ]
    });
    dialog.value = false;
    return dialog.show();
};
export function prompt(text, initial) {
    var dialog = new Dialog({
        body: htmlEntities(text)+'<input style="width:100%; display:block; margin-top:.5rem">',
        buttons:[
            {title:'OK',then(){ dialog.value = input.value; } },
            {title:t('Cancel')}
        ]
    });
    var input = dialog.element.querySelector('input');
    input.value = initial;
    setTimeout(()=>input.focus());
    dialog.value = null;
    return dialog.show();
};
/*
export function form(html){
    var dialog = new Dialog({
        body:html,
        buttons:[{title:'OK',then(){
            var form = dialog.element.querySelector('form');
            var data = {};
            form.querySelectorAll('input,textarea').forEach(el=>{
                data[el.name] = el.value;
                if (el.type === 'checkbox') data[el.name] = el.checked ? el.value : null;
            });
            dialog.value = data;
        }}]
    });
    return dialog.show();
}
*/


// helper functions
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function t(v) {
    return text[v][lang()] || v;
}
function lang() {
    return navigator.language.substring(0,2);
}
const text = {
    'Cancel':{
        'de':'Abbrechen',
        'fr':'Annuler',
        'es':'Cancelar',
        'it':'Annulla',
        'pt':'Cancelar',
        'ru':'Отмена',
        'ja':'キャンセル',
        'ko':'취소',
        'zh':'取消',
        'nl':'Annuleren',
    }
}
