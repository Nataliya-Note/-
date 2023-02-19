let players = ['x', 'o'];
let activePlayer = 0;
let board;
 
let winPos = [
  ["0", "0", "1", "1", "2", "2"],
  ["0", "2", "1", "1", "2", "0"],
  ["0", "0", "0", "1", "0", "2"],
  ["1", "0", "1", "1", "1", "2"],
  ["2", "0", "2", "1", "2", "2"],
  ["0", "0", "1", "0", "2", "0"],
  ["0", "1", "1", "1", "2", "1"],
  ["0", "2", "1", "2", "2", "2"]
];
 
function switchPlayer() {
  activePlayer === "x" ? (activePlayer = "o") : (activePlayer = "x");
}
 
function startGame() {
  //создали поле
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
 
  //установка активного игрока
  activePlayer = players[Math.floor(Math.random() * 2)];
  console.log("Active player is: " + activePlayer);
 
  renderBoard(board);
  stepCount = 0;
}
 
let dataX = [];
let dataO = [];
let stepCount = 0;
function click(row, column) {
  //записываем символ игрока
  board[row][column] = activePlayer;
  switchPlayer();
  //отрисовываем поле
  renderBoard(board);
  stepCount++;
  if (stepCount === 9) {
    alert("Ничья");
  }
  if (activePlayer === players[0]) {
    dataX.push(row);
    dataX.push(column);
  } else if (activePlayer === players[1]) {
    dataO.push(row);
    dataO.push(column);
  }
  console.log(dataX);
  console.log(dataO);
}
 
function winGame() {
  for (let i = 0; i < winPos.length; i++) {
    const winArr = winPos[i];
    const pos = [];
    for (let j = 0; j < winArr.length; j++) {
      if (j % 2) {
        const y = winArr[j],
          x = winArr[j - 1];
        pos.push(board[y][x]);
      }
    }
    if (pos[0] == pos[1] && pos[1] == pos[2] && pos[2] !== "") {
      return pos;
    }
  }
  return null;
}



















// const arr = [1,2,3,4,5,6,7,8,9];

// // for (let i = 0; i < arr.length; i++) {
// //     let el = arr[i];
// // }

// for (let n of arr) {
//     console.log(n + 1);
// }


// let area = document.getElementById('area');
// let cell = document.getElementsByClassName('cell');

// let player = "x";
// let winning = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [1,5,9],
//     [3,5,7]
// ]

// for (let i = 1; i <= 9; i++) {
//     area.innerHTML += "<div class='cell' pos="+ i +"></div>";
// }

// for (let i = 0; i < cell.length; i++) {
//     cell[i].addEventListener('click', cellClick, false)
// }

// function cellClick() {
//     let data = [];

//     if (!this.innerHTML) {
//         this.innerHTML = player;
//     } else {
//         alert("Ячейка занята");
//         return;
//     }

//     for (let i in cell) {
//          if (cell[i].innerHTML == player) {
//          data.push(parseInt(cell[i].getAttribute('pos')));
//         }
//     }

//     player = player == "x" ? "o": "x";

//     // console.log(data);

//     if (checkWin(data)) {
//         alert("Выиграл" , player);
//     }
// }

// function checkWin(data) {
//     for(let i in winning) {
//         let win = true;
//         for(let j in winning[i]) {
//             let id = winning[i][j];
//             let ind = data.indexOf(id);

//             if(win == -1) {
//                 win = false
//             }
//         }

//         if(win) return true;
//     }

//     return false;
// }
