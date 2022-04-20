class ListaNumeros{
    constructor(numeros){
        this.numeros = numeros //uma array
    }

    multiplicarNumeros(x){
        return this.numeros.map((value) => value * x)
    }
}

let minhaLista = new ListaNumeros([1, 2, 3, 4, 5])
let listasMultiplicadas = minhaLista.multiplicarNumeros(2)
console.log("Usando objeto ", listasMultiplicadas)

const multiplicaNumeros = (lst, x) => {
    return lst.map((value) => value * x)
}

let listaMultiplicada2 = multiplicaNumeros([1, 2, 3, 4, 5], 3)
console.log("Com função ",listaMultiplicada2);
