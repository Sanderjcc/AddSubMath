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
        let root = ''
        let result = ''

        for (let cont = 1; cont <= 9; cont++){ // descobre o maior quadrado possível para o  primeiro grupo
            if (groupNumbers[0] >= cont**2){
                root = String(cont**2)
                
            } else if (groupNumbers[0] < cont**2){
                result += String(root)
                console.log(`O quadrado mais  próximo de ${groupNumbers[0]} é ${cont-1}`)
                break
            }    
        }
    }
}