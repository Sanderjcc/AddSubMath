const sendButton = document.querySelector('input#sendButton')
sendButton.addEventListener('click', send)


function send(){
    const squareRoot = document.querySelector('input#num').value
    if (squareRoot.length == 0){
        alert('ERROR! Empty Field')
    } else {
        let cont = 1
        let group = ''
        let groupNumbers = []
        
        for(let i = String(squareRoot.length-1); i >=0; i--){
            if (cont == 2){
                group = squareRoot[i] + squareRoot[i+1]
                console.log(`before the add: ${groupNumbers}`)
                groupNumbers.unshift(group) 
                console.log(`after the add: ${groupNumbers}`)
                cont = 1
            
            } else if (i == 0){
                groupNumbers.unshift(squareRoot[i])
                
            } else {
                cont++
            }
            
            console.log(i)
        }
        console.log(groupNumbers)
    }

}