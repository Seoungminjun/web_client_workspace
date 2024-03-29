const $ = (selector) => {
    return new JunQuery(selector);
};

class JunQuery{
    constructor(selector){
        const elems = document.querySelector(selector);
        this.length = elems.length;
        for(let i = 0; i < elems.length; i++){
            this[i] = elems[i];
        }
        return this;
    }
    css(name, value){
        for(let i = 0; i < this.length; i++){
            this[i].style[name] = value;
        }
        return this;
    }
    html(html){
        for(let i = 0; i < this.length; i++){
            this[i].innerHTML= html;
        }
        return this;
    }
    click(f){
        for(let i = 0; i < this.length; i++){
            this[i].addEventListener('click', f);
        }
        return this;
    }
}