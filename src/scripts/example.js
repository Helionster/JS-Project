class Example {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1> It's Alive!!";

        this.ele.addEventListener("click", this.handleclick.bind(this));
    }

    handleclick() {
        this.ele.children[0].innerHTML = 'Ouch!';
    }
}

export default Example