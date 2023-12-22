function fibsRec(n, fibs = [0, 1]) {
    if (n === fibs.length) { return console.log(fibs) }
    else if (n === 1) { return [0]}
    else if (n === 2) { return [0, 1]}
    else { fibs.push(Number(fibs.slice(-1)) + Number(fibs.slice(-2, -1))) }
    return fibsRec(n, fibs) 
}

fibsRec(2)
fibsRec(4)
fibsRec(8)
fibsRec(20)