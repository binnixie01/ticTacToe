const arr = [];
let k = 0;

let button = Array.from(document.getElementsByClassName("but")); //button selection

// iife for showing markings by players
const showMarkers = (() => {
  function show() {
    for (let i = 0; i < button.length; i++) {
      button[i].textContent = arr[i];
    }
  }
  return { show };
})();

// player object name for x or y ...index for adding x or y in array for showmarker()
const player = (name, index) => {
  function addArray() {
    arr[index] = name;
  }
  return { addArray };
};

//game flow
const play = (() => {
  function change() {
    for (let j = 0; j < button.length; j++) {
      button[j].addEventListener("click", function () {
        if (!arr[j]) {
          if (k % 2 == 0) {
            //k for player playing order and no remarking
            const playerX = player("X", j);
            playerX.addArray();
            k++;
          } else {
            const playerX = player("O", j);
            playerX.addArray();
            k++;
          }
        }
        showMarkers.show();
        checkWin()
      });
    }
  }
  return { change };
})(); //iife
play.change();

//winner loser logic
const checkWin = () => {
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winner.forEach((e) => {
    if (arr[e[0]] === arr[e[1]] && arr[e[2]] === arr[e[1]] && arr[e[0]]!==undefined) {
      alert(`winner is ${arr[e[0]]}`);
      clear()
    }
  });
};

//play game again...  clearing the prev marks
const again = document.getElementById("again");
again.addEventListener("click", clear);

function clear() {
    arr.length = 0;
    k = 0;
    showMarkers.show();
  }