class Model{
    #lista =[]
    #allapot
    #lepesszam
constructor(){
    this.#allapot = "0"
   
    this.#lista= [".",".",".",".",".",".",".",".","."]

}
setAllapot(){
    if (this.#allapot===0) {
        this.#allapot = 1
    } else {
        this.#allapot = 0
    }
    this.#lista[index] = this.#allapot
    console.log(this.#lista)
}
/*#szomszedokKeresese(id) {
    let balSzelek = [3];
    let jobbSzelek = [2, 5, 8];
    const OFFSETS = [0, -1, 1, -this.#meret, this.#meret];
    OFFSETS.forEach(offset => {
        let aktId = id + offset; 
        if (aktId >= 0 && aktId < this.#allapotLista.length) {
            if ((Math.floor(aktId / 3)  == Math.floor(id / 3)) || (aktId % 3 == id % 3)) {
                this.#lampak[aktId].setAllapot();
                this.#lampak[aktId].getId();
                this.#allapotLista[aktId] = !this.#allapotLista[aktId];
            }
        }
    });
}*/
#ellenorzes() {
    let db = 0;
    this.#lista.forEach(allapot => {
        db += allapot ? 0 : 1;
    });
    return db;
}

#randomTrueFalse() {
    return Math.floor((Math.random() * 5) + 1) == 4;
}

}
export default Model