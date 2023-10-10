import Model from "../Model/Model.js"
import LampaElem from "../View/LampaElem.js"


class Controller{
    constructor() 
       {
        const MODEL = new Model()
       

        for (let index = 0; index < 9; index++) {
             new LampaElem($(".jatekter"), index)

        }
        
        $(window).on("kapcsolas", (event) => {
            console.log(event.detail.getIndex())
            MODEL.setAllapot(event.detail.getIndex())
            event.detail.setSzin(MODEL.getErtek())
           


        })


        
        }       
}
export default Controller