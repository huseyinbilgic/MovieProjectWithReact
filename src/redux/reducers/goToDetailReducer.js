import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function goToDetailReducer(state=initialState.movieForDetail,action){
    switch (action.type) {
        case actionTypes.GO_TO_DETAİL:
            return action.payload
    
        default:
            return state
    }
}