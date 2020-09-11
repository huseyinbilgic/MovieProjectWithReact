import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Media } from "reactstrap";
import { bindActionCreators } from "redux";

class Detay extends Component {
  render() {
    return (
      <Container >
        <img src={this.props.movieForDetail.Poster} alt="Poster" />
        <h3> Film/Dizi Adı:{this.props.movieForDetail.Title}</h3>
        <h2>  Süre:{this.props.movieForDetail.Runtime}</h2>
        <h2>  Türü:{this.props.movieForDetail.Type}</h2>
        <h2> Yönetmen:{this.props.movieForDetail.Director}</h2>
        <h2> Oyuncular:{this.props.movieForDetail.Actors}</h2>

        <h2> IMDB Puanı:{this.props.movieForDetail.imdbRating}</h2>

      </Container>
    );
  }
}

function mapStateToProps(state) {

  return {
    movieForDetail: state.goToDetailReducer,


  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detay);
