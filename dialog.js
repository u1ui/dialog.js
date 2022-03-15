const d = document;

class Dialog {
    constructor(options) {

        const tmpl = d.createElement('template');
        tmpl.innerHTML =
        '<dialog>'+
        '	<div class=-head>'+
        '		<div class=-title>'+(options.title??'')+'</div>'+
        '	</div>'+
        (options.body?
        '	<div class=-body>'+options.body+'</div>':'')+
        (options.foot||options.buttons?
        '	<div class=-foot>'+
        '		<div class=-buttons></div>'+
        '	</div>':'')+
        '</dialog>';
        const element = this.element = tmpl.content.firstChild;


        const btnCont = element.querySelector('.-foot>.-buttons');
        options.buttons && options.buttons.forEach(function(btn, i){
            var el = document.createElement('button');
            el.innerHTML = btn.title;
            el.addEventListener('click',(e)=>{
                btn.then && btn.then.call(this,e);
                element.close();
            });
            btnCont.appendChild(el);
            if (i === 0) setTimeout(()=>el.focus());
        });
    }
    show(){
        var element = this.element;
        document.body.appendChild(this.element);
        this.element.showModal();
        return new Promise((resolve, reject)=>{
            element.addEventListener('close',()=>{
                resolve(this.value);
                element.remove();
            });
        });
    }
}

export function alert(body) {
    var dialog = new Dialog({
        body,
        buttons:[{title:'OK'}]
    });
    return dialog.show();
};
export function confirm(title) {
    var dialog = new Dialog({
        body:title,
        buttons:[
            {title:'OK',then(){ dialog.value = true; } },
            {title:'Abbrechen'}
        ]
    });
    dialog.value = false;
    return dialog.show();
};
export function prompt(title, initial) {
    var dialog = new Dialog({
        body: title+'<br><input style="width:20em; max-width:100%">',
        buttons:[
            {title:'OK',then(){ dialog.value = input.value; } },
            {title:'Abbrechen'}
        ]
    });
    var input = dialog.element.querySelector('input');
    input.value = initial;
    setTimeout(()=>input.focus());
    dialog.value = null;
    return dialog.show();
};
