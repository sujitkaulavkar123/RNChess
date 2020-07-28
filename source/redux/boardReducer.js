import { RANDOM_SELECTION_ACTION, RESET_ACTION } from "./action";
import { getRandomMove } from '../utils/RandomMoves';
import { allPieces } from '../utils/Pieces';

const initialState = {
  newMove: allPieces,
  disableResetButton: true
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_SELECTION_ACTION: 
    const newPositions = getRandomMove();     
      return { ...state, newMove: newPositions, disableResetButton: false };
    case RESET_ACTION:      
      return { ...state, newMove: allPieces, disableResetButton: true };
    default:
      return state;
  }
};

export default boardReducer;

export const randomSelectionAction = () => {
  return { type: RANDOM_SELECTION_ACTION };
};

export const resetBoardAction = () => {
  return { type: RESET_ACTION };
};
