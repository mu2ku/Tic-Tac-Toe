// //- Display an empty tic-tac-toe board when the page is initially displayed.
// //- A player can click on the nine cells to make a move.
// //- Every click will alternate between marking an `X` and `O`.
// //- Once occupied with an `X` or `O`, the cell cannot be played again.
// //- Provide a `Reset Game` button that will clear the contents of the board.
// //- Display whose turn it is (“X” or “O”).
// //- Provide win logic and display a winning message.
// - Provide logic for a cat’s game (tie), also displaying a message.


/*-------------------------------- Constants --------------------------------*/

winCondition = [
  [0,1,2],
  [3,4,5], 
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, isWinner

/*------------------------ Cached Element References ------------------------*/


let square = document.querySelectorAll('.square')
let resetBtn = document.getElementById('reset-button')
let msg = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/

square.forEach(function(element,idx){square[idx].addEventListener('click', handleClick)})
resetBtn.addEventListener('click', init)
msg.addEventListener('click',handleClick)

/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  resetBtn.setAttribute("hidden", true)
  board = [
    0,0,0,
    0,0,0,
    0,0,0
  ]
  isWinner = null 
  turn = 1
  square.forEach(function(element,idx){
    square[idx].innerText = ''
    square[idx].style.pointerEvents='auto'
  })
  msg.innerText =  `It's X's turn`
  render()
}

function handleClick(evt){
  resetBtn.removeAttribute("hidden")
  if (turn == 1){
    board[parseInt(evt.target.id)] = 1
    evt.target.style.pointerEvents = "none"
    msg.innerText = `It's O's turn`
  } else if (turn == -1){
    board[parseInt(evt.target.id)] = -1
    evt.target.style.pointerEvents = "none"
    msg.innerText = `It's X's turn`
  }
  // console.log(evt.target.id)
  // console.log(turn)
  // console.log(board)
  turn = turn * -1
  render()
  win()
}

function render(){
  square.forEach(function(element,idx){
    if (board[idx] == 1){
      square[idx].innerText = 'X'
    } else if (board[idx] == -1){
      square[idx].innerText = 'O'
    }
  })
}

function win(){
  //The absolute value of the sum of the entire board should equal 9 for a cat's game
  let cat = board.reduce(function(acc,num){
    return acc + Math.abs(num)},0)
  if (cat == 9){
    msg.innerText = `Cat's Game`
  }
  //The absolute value of the sum of the win conditions should equal 3 for a win
  if (
    Math.abs(board[0] + board [1] + board[2]) == 3 ||
    Math.abs(board[3] + board [4] + board[5]) == 3 ||
    Math.abs(board[6] + board [7] + board[8]) == 3 ||
    Math.abs(board[0] + board [3] + board[6]) == 3 ||
    Math.abs(board[1] + board [4] + board[7]) == 3 ||
    Math.abs(board[2] + board [5] + board[8]) == 3 ||
    Math.abs(board[0] + board [4] + board[8]) == 3 ||
    Math.abs(board[2] + board [4] + board[6]) == 3
  ){
    isWinner = turn * -1
    if (isWinner == 1){
      msg.innerText = `X is the winner`
    } else if (isWinner == -1){
      msg.innerText = `O is the winner`
    }
  }
}


