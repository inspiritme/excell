
export class Excel{
    constructor(selector,options){
        this.$el = document.querySelector(selector);
        this.components = options.components || []
    }

    getRoot(){
        const $root = document.createElement('div');
        this.components.forEach(Component=>{
            const component = new Component()
            // console.log(component.toHTML());
            $root.insertAdjacentHTML("afterbegin",component.toHTML())
        })
        console.log(this.components)
        return $root;
    }

    render(){
        // console.log(this.$el)
        // this.$el.insertAdjacentHTML('afterbegin','<h1>Test</h1>')
        // const node = document.createElement('h1');
        // node.textContent = "Test"
        this.$el.append(this.getRoot());
    }
}
