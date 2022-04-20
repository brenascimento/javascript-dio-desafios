const filtrarPares = lst => {
    return lst.filter((value) => (value % 2) == 0)
}

let pares = filtrarPares([1, 2, 3, 4, 5, 6, 7, 8])
console.log(pares)