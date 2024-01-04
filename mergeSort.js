function mergeSort(array) {
    if (!(array.every((item) => typeof item === 'object'))) {
        const copy = array.map((item) => [item]);
        return mergeSort(copy);
    } else {
        let copy = [];
        const chunkSize = 2;
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize);
            let sortedChunk = [];
            let chunkCopy = [];
            chunk.forEach(b => 
                b.forEach(c => 
                    chunkCopy.push(c)
                    )
                );
            while (chunkCopy.length > 0) {
                const lowest = Math.min(...chunkCopy);
                sortedChunk.push(lowest);
                chunkCopy.splice(chunkCopy.indexOf(lowest), 1);
            }
            copy.push(sortedChunk);
        }
        const finalCopy = [];
            copy.forEach(a => {
                a.forEach(b => {
                    finalCopy.push(b);
                })
            })
        if (copy.length === 1 || (copy.length === 2 && finalCopy.length % 2 !== 0)) {
            return finalCopy; // Base case, which stops the recursion
        }
        return mergeSort(copy)
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 7, 0, 2, 11]));
console.log(mergeSort([1, 2, 3, 4])); // Already sorted, so returns the array itself