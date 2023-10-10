class Model{
    #lista =[]
    #allapot
    
constructor(){
    this.#allapot = "1"

    this.#lista= [".",".",".",".",".",".",".",".","."]

}
setAllapot(index){
    if (this.#allapot===1) {
        this.#allapot = 0
    } else {
        this.#allapot = 1
    }
    this.#lista[index] = this.#allapot
    console.log(this.#lista)
}
getErtek(){
    return this.#allapot
}


}
export default Model