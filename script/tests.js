for(let i = Number(squareRoot.length-1); i >= 0; i--){
    if (cont == 2){
        cont = 0
        groupNumbers.push(group)
    } else {
        group += squareRoot[i]
    }
    cont++
}
console.log(groupNumbers)