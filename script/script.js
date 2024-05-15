const sendButton = document.querySelector('input#sendButton')
sendButton.addEventListener('click', send)


function send(){
    const squareRoot = document.querySelector('input#num').value
    if (squareRoot.length == 0){
        alert('ERROR! Empty Field')
    } else {
        let cont = 0
        let group = ''
        let groupNumbers = []
        
        for(let i = Number(squareRoot.length-1); i >=0; i--){
            if (cont == 2){
                
            }
        }
        
    }

}