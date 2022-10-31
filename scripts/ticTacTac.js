(function () {
  /**
   * Setting Up the Board
   * let board - creating Element board
   */
  let board = document.querySelector("#tic-tac-toe-board");
  board.setAttribute("data-player", "x");
  board.setAttribute("data-moves", 0);
  board.style.pointerEvents = "none";
  let boardOriginal = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  /**
   * Duplicating board
   */
  let boardArray = boardOriginal.slice();
  /**
   * Selecting #start-button
   */
  let startBtn = document.querySelector("#start-button");

  /**
   * Function StartGame()
   * @param {dom object} button | contains start button dom object
   * @param {dom object} board  | contains board dom object
   */
  const startGame = (button, board) => {
    let playerX = document.querySelector('input[name="player_x"]');
    let playerO = document.querySelector('input[name="player_o"]');

    if (playerX.value && playerO.value) {
      playerX.classList.remove("is-required");
      playerO.classList.remove("is-required");
      board.setAttribute("data-player-x", playerX.value);
      board.setAttribute("data-player-o", playerO.value);
      // Hide the start button
      button.style.zIndex = -9999;
      // add pointer events to board
      board.style.pointerEvents = "auto";
    } else {
      playerX.classList.add("is-required");
      playerO.classList.add("is-required");
    }
  };

  startBtn.addEventListener("click", () => {
    startGame(startBtn, board);
  });

  /**
   * Function ShowWinner()
   * @param {string} whichPlayer | contains the letter of who won x or o
   */
  const showWinner = (whichPlayer) => {
    let board = document.querySelector("#tic-tac-toe-board");
    let winner = board.getAttribute(`data-player-${whichPlayer}`);
    console.log(`You won! ${winner}`);
  };

  /**
   * Function ShowWinningSpace()
   * @param {string array} path | contains an array of coordinates converted to string e.g ["00","01","02"]
   * @param {string} direction | contains the name on which direction were the winning coordinates e.g "dir-column","dir-row", etc..
   */
  const showWinningSpace = (path, direction) => {
    path.forEach((item, i) => {
      let block = document.querySelector(`.block${item}`);
      block.classList.add("scratch");
      block.classList.add(`${direction}-${i}`);
    });
  };

  /**
   * Function CheckForWinners()
   * @param {multi-dimensional array} boardReplica | contains the duplicate board or replica of the boardOriginal Variable
   */
  const checkForWinners = (boardReplica) => {
    let winner = null,
      winningPath = null,
      winningDirection = null;
    let forDiag = [],
      backDiag = [];
    for (let i = 0, b = 2; i < boardReplica.length; i++, b--) {
      let rowSum = boardReplica[i].reduce((prev, curr) => prev + curr, 0);
      let colSum = [
        boardReplica[0][i],
        boardReplica[1][i],
        boardReplica[2][i],
      ].reduce((prev, curr) => prev + curr, 0);
      forDiag.push(boardReplica[i][i]);
      backDiag.push(boardReplica[b][i]);
      if (rowSum === 9 || colSum === 9) {
        winner = "x";
        if (9 === rowSum) {
          winningPath = [`${i}0`, `${i}1`, `${i}2`];
          winningDirection = "dir-row";
        } else if (9 === colSum) {
          winningPath = [`0${i}`, `1${i}`, `2${i}`];
          winningDirection = "dir-column";
        }
      } else if (rowSum === 15 || colSum === 15) {
        winner = "o";
        if (15 === rowSum) {
          winningPath = [`${i}0`, `${i}1`, `${i}2`];
          winningDirection = "dir-row";
        } else if (15 === colSum) {
          winningPath = [`0${i}`, `1${i}`, `2${i}`];
          winningDirection = "dir-column";
        }
      }
    }

    fDiagSum = forDiag.reduce((prev, curr) => prev + curr, 0);
    bDiagSum = backDiag.reduce((prev, curr) => prev + curr, 0);

    if (fDiagSum === 9 || bDiagSum === 9) {
      winner = "x";
      if (9 === fDiagSum) {
        winningPath = ["00", "11", "22"];
        winningDirection = "dir-front-diagonal";
      } else if (9 === bDiagSum) {
        winningPath = ["20", "11", "02"];
        winningDirection = "dir-back-diagonal";
      }
    } else if (fDiagSum === 15 || bDiagSum === 15) {
      winner = "o";
      if (15 === fDiagSum) {
        winningPath = ["00", "11", "22"];
        winningDirection = "dir-front-diagonal";
      } else if (15 === bDiagSum) {
        winningPath = ["20", "11", "02"];
        winningDirection = "dir-back-diagonal";
      }
    }

    if (null !== winner) {
      document.querySelector("#tic-tac-toe-board").classList.add("player-won");
      document.querySelectorAll(".square-space").forEach((item) => {
        item.style.pointerEvents = "none";
      });
      // Show winner!
      showWinner(winner);
      // Trigger a winner screen or overlay
      showWinningSpace(winningPath, winningDirection);
    }
  };

  /**
   * Function ChangePlayer()
   * @returns the value of each player either 3 or 5 so we can use it to sum up the value of rows, columns or diagonal combinationns to determine the winner.
   */
  const changePlayer = () => {
    let board = document.querySelector("#tic-tac-toe-board");
    if (board.getAttribute("data-player") === "x") {
      // change to o
      board.setAttribute("data-player", "o");
      return 3;
    } else {
      board.setAttribute("data-player", "x");
      return 5;
    }
  };

  /**
   * Function SelectSpace()
   * @param {dom} space | a div element that represents the block in the board
   * @param {dom} board | DOM element of the Board variable
   * @param {multi-dimensional array} boardArray | the replica of the boardOriginal variable
   * @returns none
   */
  const selectSpace = function (space, board, boardArray) {
    // set the value of space to said player
    let currPlayer = board.getAttribute("data-player");
    let moves = parseInt(board.getAttribute("data-moves"));
    if (space.getAttribute("data-value") === "") {
      space.setAttribute("data-value", currPlayer);
      space.innerHTML = `<span>${currPlayer}</span>`;
      // change player
      boardArray[parseInt(space.getAttribute("data-row"))][
        parseInt(space.getAttribute("data-col"))
      ] = changePlayer();
      // check for winners
      if (moves >= 4) {
        checkForWinners(boardArray);
      }
      board.setAttribute("data-moves", ++moves);
    }

    return;
  };

  boardArray.forEach((item, i) => {
    item.forEach((subItem, si) => {
      let squareSpace = document.createElement("div");
      squareSpace.setAttribute("data-col", si);
      squareSpace.setAttribute("data-row", i);
      squareSpace.setAttribute("data-value", "");
      squareSpace.classList.add("square-space");
      squareSpace.classList.add(`block${i}${si}`);

      squareSpace.addEventListener("click", () => {
        selectSpace(squareSpace, board, boardArray);
      });

      board.append(squareSpace);
    });
  });
})();
