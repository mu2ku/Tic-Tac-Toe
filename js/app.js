/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board = [
  0,0,0,
  0,0,0,
  0,0,0
]
let turn = 1
let isWinner = null

/*------------------------ Cached Element References ------------------------*/

// let top_left = document.getElementById('sq0')
// let top_mid = document.getElementById('sq1')
// let top_right = document.getElementById('sq2')
// let mid_left = document.getElementById('sq3')
// let mid_mid = document.getElementById('sq4')
// let mid_right = document.getElementById('sq5')
// let bottom_left = document.getElementById('sq6')
// let bottom_mid = document.getElementById('sq7')
// let bottom_right = document.getElementById('sq8')
let square = document.querySelectorAll('.square')
let resetBtn = document.getElementById('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/

// top_left.addEventListener('click', handleClick)
// top_mid.addEventListener('click', handleClick)
// top_right.addEventListener('click', handleClick)
// mid_left.addEventListener('click', handleClick)
// mid_mid.addEventListener('click', handleClick)
// mid_right.addEventListener('click', handleClick)
// bottom_left.addEventListener('click', handleClick)
// bottom_mid.addEventListener('click', handleClick)
// bottom_right.addEventListener('click', handleClick)
square.forEach(function(element,idx){square[idx].addEventListener('click', handleClick)})
// resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

// init()

function init(){
  resetBtn.setAttribute("hidden", true)
  board = [
    0,0,0,
    0,0,0,
    0,0,0
  ]
  isWinner = null // The winner variable will hold the player value (1 or -1) if there's a winner. The winner will hold a 'T' if there's a tie.
  turn = 1 // X's turns will be marked by 1. O's turns will be marked by -1
  render()
}

function handleClick(evt){
  evt.target.style.backgroundColor = 'red'
  turn = turn * -1
  render()
}

square.forEach(function render(element,idx){
square[idx].innerText = board[idx]
})