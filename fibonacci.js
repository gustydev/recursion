function fibs(n) {
    let fibs = [0, 1];
    if (n <= 0) { return }
    if (n === 1) {return [0] }
    if (n === 2) { return fibs }
    for (let i = 2; i < n; i++) {
        fibs.push(fibs[i-2] + fibs[i-1])
    }
    return fibs;
}

console.log(fibs(2))
console.log(fibs(4))
console.log(fibs(8))
console.log(fibs(20))