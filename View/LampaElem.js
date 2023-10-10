class LampaElem{
    ertek
    #index
    #lepesszam=0
    constructor(szuloelem, index){
        
        this.szuloelem = szuloelem
        this.#htmlOsszerak()
        this.#index = index
        this.kattinthato = true
        this.elem = $(".elem:last-child");
        this.pElem = this.elem.children("p");
        this.setallapot();
        this.ertek = this.setErtek();
        this.elem.on("click", () => {
            this.#kattintasTrigger("kapcsolas")
            
           
            
        })
    }
    setErtek(ertek) {
        this.ertek = !this.ertek;
        
        this.pElem.html(ertek);
        

    }
    

    #htmlOsszerak() {
        let txt = ""
        txt += `<div class="elem"><p class="pelem"></p></div>`;
        
        this.szuloelem.append(txt)
    }
    setallapot(){
        for (let index = 0; index < 9; index++) {
            const element =Math.floor(Math.random()*2)
            if (element === 0) {
                this.elem.css("background-color", "orange");
            } else if (element ===1){
                this.elem.css("background-color", "green");
            }
           }
    }
    setSzin(allapot) {
       
        if (allapot === 0) {
            this.elem.css("background-color", "orange");
        } else if (allapot ===1){
            this.elem.css("background-color", "green");
        }
       }
       
    
    #kattintasTrigger() {
        const EVENT = new CustomEvent("kapcsolas", {detail:this}) 
          
    
        window.dispatchEvent(EVENT);
    }
    
    getIndex(){
        return this.#index
    }
}
export default LampaElem