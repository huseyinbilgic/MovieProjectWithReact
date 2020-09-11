import { combineReducers } from "redux";
import getMovieReducer from "./getMoviesReducer";
import changeVariableReducer from "./changeVariableReducer";
import goToDetailReducer from "./goToDetailReducer";
import getPageNumberReducer from "./getPageNumberReducer";
import increasePageNumberReducer from "./increasePageNumberReducer";

const rootReducer = combineReducers({
  getMovieReducer,
  changeVariableReducer,
  goToDetailReducer,
  getPageNumberReducer,
  increasePageNumberReducer,
});

export default rootReducer;
