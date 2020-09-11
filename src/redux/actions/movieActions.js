import * as actionTypes from "./actionTypes";

export function getMovieSuccess(totalResults,movie) {
  return {
    type: actionTypes.GET_MOVIE_SUCCESS,
    payload:{ movie,totalResults},
  };
}
export function getMovie(variable,pageNumber) {
  return function (dispatch) {
    let url = "http://www.omdbapi.com/?s="+variable+"&apikey=806311be&page="+pageNumber;
   
    return fetch(url)
      .then((response) => response.json())
      .then((result) => {
        dispatch(getMovieSuccess(result.totalResults,result.Search));
      });
  };
}




export function changeVariable(variable) {
  return {
    type: actionTypes.CHANGE_VARIABLE,
    payload: variable,
  };
}



export function goToDetailSuccess(movie) {
  return {
    type: actionTypes.GO_TO_DETAİL,
    payload: movie,
  };
}

export function goToDetail(movie) {
  return function (dispatch) {
    let url;
    if (movie !== null) {
      url = "http://www.omdbapi.com/?i=" + movie.imdbID + "&apikey=806311be";
    }

    return fetch(url)
      .then((response) => response.json())
      .then((result) => {
        dispatch(goToDetailSuccess(result));
      });
  };
}





export function getPageNumber(number) {
  return {
    type: actionTypes.GET_PAGENUMBER,
    payload: number,
  };
}


export function increasePageNumber(number) {
  return {
    type: actionTypes.INCREASE_PAGENUMBER,
    payload: number,
  };
}
