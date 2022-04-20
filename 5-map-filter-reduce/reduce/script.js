const somaLista = lst => {
    return lst.reduce((prev, curr) => prev + curr)
}

let minhaSoma = somaLista([1, 1, 1, 1])
console.log("Soma ", minhaSoma)

const precoSubtraido = (lstPreco, saldoDisp) => {
    return lstPreco.reduce((prev, curr, index, array) => {
        console.log(prev)
        console.log(curr)
        console.log("Indice ", index)
        console.log("Como está a array ", array)
        return parseInt(prev - curr.preco)
    }, saldoDisp)
}

let precos = [
    {
        produto: 'jogo de toalha',
        preco: 24.70
    },
    {
        produto: 'barra de chocolate',
        preco: 3.99
    },
    {
        produto: 'papel higienico',
        preco: 24.70
    },
    {
        produto: 'sabonete liquido premium',
        preco: 20.75
    }
]


let compras = precoSubtraido(precos, 120)
console.log("Numa lista de compras, o saldo disponível é de ", compras)

