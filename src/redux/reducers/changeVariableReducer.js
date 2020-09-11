import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function changeVariableReducer(state=initialState.variable,action){
    switch (action.type) {
        case actionTypes.CHANGE_VARIABLE:
            return (action.payload)
    
        default:
            return state
    }
}