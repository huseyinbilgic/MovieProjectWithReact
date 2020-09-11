import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function getMovieReducer(state=initialState.movie,action){
    switch (action.type) {
        case actionTypes.GET_MOVIE_SUCCESS:
            
            return {movie:action.payload.movie,results:action.payload.totalResults}
    
        default:
            return state
    }
}