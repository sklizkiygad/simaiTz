export default class Component{
    constructor(template,params,modifys,textIn,buttonHandlers) {
        this.template=template;
        this.params=params;
        this.modifys=modifys;
        this.textIn=textIn;
        this.buttonHandlers=buttonHandlers;

      }
      createButton(){
        let paramsList=Object.keys(this.params),
        modifysList=Object.keys(this.modifys),
        buttonHandlersList=Object.keys(this.buttonHandlers)
        const newButton = document.createElement("button");
        paramsList.forEach(parameter=>{
            newButton.setAttribute(parameter, this.params[parameter])
        })
        modifysList.forEach(modify=>{
            newButton.style[modify]=this.modifys[modify]
        })
        newButton.innerText=this.textIn
        buttonHandlersList.forEach(buttonHandler=>{ 
            newButton.addEventListener(buttonHandler,this.buttonHandlers[buttonHandler])
        })
       return newButton;
      }
}