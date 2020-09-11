import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function increasePageNumberReducer(state=initialState.pageNumber,action){

    switch (action.type) {
        case actionTypes.INCREASE_PAGENUMBER:
            return action.payload
    
        default:
            return state
    }
}