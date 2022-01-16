/**
 * Global variables
 */
import {
  getCellElementList,
  getCurrentTurnElement,
  getCellElementAtIdx,
  getGameStatusElement,
} from "./selectors.js";
import { TURN, CELL_VALUE, GAME_STATUS } from "./constants.js";
import { checkGameStatus } from "./utils";
let currentTurn = "cross";
let isGameEnded = false;
let cellValues = new Array(9).fill("");
console.log(checkGameStatus(["X", "O", "O", "", "X", "", "", "O", "X"]));

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
function toggleTurn() {
  currentTurn = currentTurn === TURN.CIRCLE ? TURN.CROSS : TURN.CIRCLE;
  const currentTurnElement = getCurrentTurnElement();
  if (currentTurnElement) {
    currentTurnElement.classList.remove(TURN.CROSS, TURN.CIRCLE);
    currentTurnElement.classList.add(currentTurn);
  }
}
function handleCellClick(cell, index) {
  const isClicked =
    cell.classList.contains(TURN.CIRCLE) || cell.classList.contains(TURN.CROSS);
  if (isClicked) return;
  // cell la the li element
  // index vi tri cua no
  console.log("click", cell, index);
  cell.classList.add(currentTurn);
  // toggle turn
  toggleTurn();
}
function initCellElementList() {
  //lay ra đuoc danh sach cac the li roi gan su kien
  const cellElementList = getCellElementList();
  cellElementList.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(cell, index));
  });
}
(() => {
  initCellElementList();
})();
