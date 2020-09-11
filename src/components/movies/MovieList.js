import React, { Component } from "react";
import * as movieActions from "../../redux/actions/movieActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

class MovieList extends Component {
  componentDidMount() {
    this.props.actions.getMovie(this.props.variable,this.props.pageNumber);
  }
  goDetail = (movie) => {
    this.props.actions.goToDetail(movie);
  };
  artır=()=>{
    
    this.props.actions.increasePageNumber(this.props.pageNumber!==parseInt(Number(this.props.movie.results)/10,10)? this.props.pageNumber+1:this.props.pageNumber)
    this.props.actions.getMovie(this.props.variable,this.props.pageNumber)
  }
  azalt=()=>{
    this.props.actions.increasePageNumber(this.props.pageNumber===1?1:this.props.pageNumber-1)
    this.props.actions.getMovie(this.props.variable,this.props.pageNumber)

  }
  renderfor(){
    let render1=[];
    for (const key in this.props.movie.movie) {
      
      render1.push(this.props.movie.movie[key])
     }
     return render1
  }
  render() {
    
    return (
      <div>
        <h3>Film</h3>
        <Table striped>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Date</th>
              <th>Imdb Id</th>
            </tr>
          </thead>
          <tbody>
           
             {this.renderfor().map((movie) => (
              <tr key={movie.Title + 1}>
                <td>
                  <Link onClick={() => this.goDetail(movie)} to="/moviedetail">
                    {movie.Title}
                  </Link>
                </td>
                <td>{movie.Year}</td>
                <td>{movie.imdbID}</td>
              </tr>
            ))} 
          </tbody>
        </Table>
        <nav aria-label="...">
          <ul className="pagination">
            <li onClick={this.azalt}  className="page-item">
              <a className="page-link">
                Previous
              </a>
            </li>
           
            <li className="page-item">
              <a className="page-link" >
                {this.props.pageNumber}
              </a>
            </li>
            
           
            <li onClick={this.artır}  className="page-item">
              <a className="page-link">
                Next
              </a>
            </li>
          </ul>
        </nav>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.getMovieReducer,
    variable:state.changeVariableReducer,
    pageNumber:state.getPageNumberReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMovie: bindActionCreators(movieActions.getMovie, dispatch),
      goToDetail: bindActionCreators(movieActions.goToDetail, dispatch),
      increasePageNumber: bindActionCreators(movieActions.increasePageNumber, dispatch),
     
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
