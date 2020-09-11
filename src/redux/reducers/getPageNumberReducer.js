import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function getPageNumberReducer(state=initialState.pageNumber,action){
    switch (action.type) {
        case actionTypes.GET_PAGENUMBER:
            return action.payload
    
        default:
            return state
    }
}