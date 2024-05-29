const sendButton = document.querySelector('input#sendButton')
sendButton.addEventListener('click', send)


function send(){ //main function
    const squareRoot = document.querySelector('input#num').value
    if (squareRoot.length == 0){
        alert('ERROR! Empty Field')
    } else {
        let cont = 1
        let group = ''
        let groupNumbers = []
        
        for(let i = String(squareRoot.length-1); i >=0; i--){ // Loop for grouping the squareRoot
            if (cont == 2){
                group = squareRoot[i] + squareRoot[i+1]
                groupNumbers.unshift(group) 
                cont = 1
            
            } else if (i == 0){
                groupNumbers.unshift(squareRoot[i])
                
            } else {
                cont++
            }
        }

        // start of calculation
        let difTemp = 0
        let dif = ''
        let double = 0
        let result = ''

        for (let cont = 1; cont <= 9; cont++){ // descobre o maior quadrado possível para o  primeiro grupo
            if (groupNumbers[0] < cont**2){
                result = String(cont-1)
                difTemp = Number(groupNumbers[0]) - Number(result)**2
                double = result*2
                break
                
            }    
        }

        for (let i = 1; i < groupNumbers.length; i++){
            dif = String(difTemp) + groupNumbers[i]
            let dividend = Number(dif.slice(0, dif.length-1) )
            let quocient = parseInt(dividend/double)
            while (true){
                if ((double*10 + quocient) * quocient <= Number(dif)){
                    result += String(quocient)
                    difTemp = Number(dif) - (double*10 + quocient) * quocient
                    double = Number(result)*2
                    break
                
                } else {
                    quocient--
                }
            }
        }
    }
}