

let tic_tac_toe = false
let gameOver = false
let clicked = []
let isCrossed = [[],[],[],[],[],[],[],[]]

const cells = document.querySelectorAll('.cell')

const players = document.querySelectorAll('.player')
const reset = document.getElementById('restart-btn')

reset.addEventListener('click',()=>{
    players[0].style.backgroundColor = 'grey'
    players[1].style.backgroundColor = 'white'
    tic_tac_toe = false
    gameOver = false
    clicked = []
    isCrossed = [[],[],[],[],[],[],[],[]]
    players[0].classList.remove('blink-bg')
    players[1].classList.remove('blink-bg')

})

players[0].style.backgroundColor = 'grey'


cells.forEach(cell=>{
    cell.addEventListener('click',()=>{
        let cellId = cell.getAttribute('id')

       if(!clicked.includes(cellId) && !gameOver){

        clicked.push(cellId)
        if(tic_tac_toe){
            cell.innerHTML = "<p>o</p>"
            tic_tac_toe = !tic_tac_toe

            gameMaster(cellId, 1)
           
        }
        else{
            cell.innerHTML = "<p>x</p>"
            tic_tac_toe = !tic_tac_toe
            gameMaster(cellId, 0)
            

        }
    }
       

    })

   
})


const gameMaster = (cell,symbol) => {

   

    switch(cell){
        case "cell1": isCrossed[0].push(symbol)
        isCrossed[3].push(symbol)
        isCrossed[6].push(symbol)
        break;
        case "cell2": isCrossed[0].push(symbol)
        isCrossed[4].push(symbol)
        break;
        case "cell3": isCrossed[0].push(symbol)
        isCrossed[5].push(symbol)
        isCrossed[7].push(symbol)
        break;
        case "cell4": isCrossed[1].push(symbol)
        isCrossed[3].push(symbol)
        break;
        case "cell5": isCrossed[1].push(symbol)
        isCrossed[4].push(symbol)
        isCrossed[6].push(symbol)
        isCrossed[7].push(symbol)
        break;
        case "cell6": isCrossed[1].push(symbol)
        isCrossed[5].push(symbol)
        break;
        case "cell7": isCrossed[2].push(symbol)
        isCrossed[3].push(symbol)
        isCrossed[7].push(symbol)
        break;
        case "cell8": isCrossed[2].push(symbol)
        isCrossed[4].push(symbol)
        break;
        case "cell9": isCrossed[2].push(symbol)
        isCrossed[5].push(symbol)
        isCrossed[6].push(symbol)
        break;
    }
    
    console.log(isCrossed)
    isCrossed.forEach(cross=>{
        if(cross.length === 3){
           const sum =  cross.reduce((a,b)=> a + b, 0)
            if(sum === 0 || sum === 3 ){
                // alert("we have our winner")
                gameOver = !gameOver
                
                players[symbol].classList.add('blink-bg')
                return
            }else if(clicked.length === 9){
                gameOver = !gameOver
                players[0].style.backgroundColor = 'grey'
                players[1].style.backgroundColor = 'grey'
                return
            }
        }
    })

    if(!gameOver){
        if(players[0].style.backgroundColor === 'grey'){
            players[1].style.backgroundColor = 'grey'
            players[0].style.backgroundColor = 'white'
        }else{
            players[0].style.backgroundColor = 'grey'
            players[1].style.backgroundColor = 'white'
        }
    }
    


}