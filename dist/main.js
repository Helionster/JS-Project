!function(){"use strict";var e;e=class{constructor(e){this.ele=e,this.ele.innerHTML="<h1> It's Alive!!",this.ele.addEventListener("click",this.handleclick.bind(this))}handleclick(){this.ele.children[0].innerHTML="Ouch!"}},document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("main");new e(n)}))}();
//# sourceMappingURL=main.js.map