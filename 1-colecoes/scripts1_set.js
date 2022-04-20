const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

const uniqueValues = (arr) => {
    return [... new Set(arr)];
}

console.log(uniqueValues(meuArray));