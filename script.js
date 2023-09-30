

let turn = "X";
let GameOver= false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"

}


const checkWin = () => {
    let boxtext = document.getElementsByClassName('textbox')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    wins.forEach(e=>{

        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[2]].innerText == boxtext[e[1]].innerText ) && (boxtext[e[0]].innerText !=='' ) ) {
            document.getElementsByClassName('round')[0].innerText ="the game is win by " +  boxtext[e[0]].innerText  ;
            GameOver=true;
        }
    })
}


let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.textbox')
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn()
            checkWin();
            if(!GameOver){
                document.getElementsByClassName('round')[0].innerText = "Turn for "+turn;
            }
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtexts =document.querySelectorAll('.textbox');
    Array.from(boxtexts).forEach(element =>{
       element.innerHTML = ''; 
    })
})