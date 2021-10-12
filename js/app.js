/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board
let turn
let isWinner

/*------------------------ Cached Element References ------------------------*/

let top_left = document.getElementById('#sq0')
let top_mid = document.getElementById('#sq1')
let top_right = document.getElementById('#sq2')
let mid_left = document.getElementById('#sq3')
let mid_mid = document.getElementById('#sq4')
let mid_right = document.getElementById('#sq5')
let bottom_left = document.getElementById('#sq6')
let bottom_mid = document.getElementById('#sq7')
let bottom_right = document.getElementById('#sq8')
let resetBtn = document.getElementById('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init(){
  resetBtn.setAttribute("hidden", true)
  board = [
    null,null,null,
    null,null,null,
    null,null,null
  ]
  isWinner = 'ongoing' //at initialization, isWinner is set to ongoing. Can be set to win, lose, and tie as well
  turn = 1 // X's turns will be marked by 1, O's turns will be marked by -1
}