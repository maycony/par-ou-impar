function parOuImpar(number) {
    if (number % 2 == 0) {
        return `${number} é Par.`
    } else {
        return `${number} é Ímpar.`
    }
}

console.log(parOuImpar(20))