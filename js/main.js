/**
 * Global variables
 */
let currentTurn = "cross";
let isGameEnded = false;
let cellValues = new Array(9).fill("");

/**
 * TODOs
 *
 * 1. Bind click event for all cells
 * 2. On cell click, do the following:
 *    - Toggle current turn
 *    - Mark current turn to the selected cell
 *    - Check game state: win, ended or playing
 *    - If game is win, highlight win cells
 *    - Not allow to re-click the cell having value.
 *
 * 3. If game is win or ended --> show replay button.
 * 4. On replay button click --> reset game to play again.
 *
 */
function handleCellClick(cell, index) {
  // cell la the li element
  // index vi tri cua no
  console.log("click", cell, index);
}
function initCellElementList() {
  console.log("a");
  //lay ra đuoc danh sach cac the li roi gan su kien
  const cellElementList = getCellElementList();
  console.log(cellElementList);
  console.log("b");
  cellElementList.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
  });
}
(() => {
  initCellElementList();
})();
