import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import { bindActionCreators } from "redux";
import Filter from "../filter/Filter";

import MovieList from "../movies/MovieList";
import * as movieActions from "../../redux/actions/movieActions";

class Main extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <Filter></Filter>
          </Col>
          <Col xs="9">
            <MovieList></MovieList>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {},
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
