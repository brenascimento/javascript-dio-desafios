const verificaTamanho = (arr, n) => {
    try{
        if(!arr || !n) throw new ReferenceError("Escreva os dois parâmetros!")
        if(typeof arr != "object" || typeof n != "number") throw new TypeError("Parametro 1: precisa ser Array\n Parametro 2: precisa ser um número")
        if(arr.length !== n) throw new RangeError("O array está diferente do tamanho N")

        return arr
    } catch(e){
        if(e instanceof ReferenceError){
            console.log("Isso é um ReferenceError!")
            console.log(e.message)
        } 
        else if(e instanceof TypeError) {
            console.log("isso é um TypeError");
            console.log(e.name)
        }
        else if(e instanceof RangeError) {
            console.log("isso é um RangeError")
            console.log(e.stack)
        }
    }
    
}

verificaTamanho() // ReferenceError
verificaTamanho(1, ) // ReferenceError
verificaTamanho(n=10) // ReferenceError
verificaTamanho(1, 2) // TypeError
verificaTamanho(["tamanho1", "tamanho2"], 3) // RangeError
console.log(verificaTamanho(["ab", "cd"], 2)) // Correct/without error

