export const ADD_WINNER = 'ADD_WINNER';

export function addWinner(winner) {
  return {
    type: ADD_WINNER,
    winner
  }
}

export const DRAW_WINNER = 'DRAW_WINNER';

export function drawWinner() {
  return {
    type: DRAW_WINNER
  }
}
