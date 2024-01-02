function fibsRec(n, fibs = [0, 1]) {
    if (n === fibs.length) { return fibs }
    else if (n === 1) { return [0]}
    else if (n === 2) { return [0, 1]}
    else { fibs.push(Number(fibs.slice(-1)) + Number(fibs.slice(-2, -1))) }
    return fibsRec(n, fibs)
}

console.log(fibsRec(2))
console.log(fibsRec(4))
console.log(fibsRec(8))
console.log(fibsRec(20))