import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { bindActionCreators } from "redux";
import * as movieActions from "../../redux/actions/movieActions";
class Filter extends Component {
    changeVariable=(event)=>{
        this.props.actions.changeVariable(event.target.value)
    }
    submitHandler=(event)=>{
        event.preventDefault();
        this.props.actions.increasePageNumber(1)
        this.props.actions.getMovie(this.props.variable,this.props.pageNumber)
        
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.submitHandler}>
          
          <FormGroup>
            <Label for="movieName">Film Arama </Label>
            <Input
            
                onChange={this.changeVariable}
              type="text"
              name="movieName"
              id="movieName"
              placeholder="Enter a movie"
            />
          </FormGroup>
          <Button type="submit" >Submit</Button>
        </Form>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
      variable:state.changeVariableReducer,
      pageNumber:state.getPageNumberReducer
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        getMovie: bindActionCreators(movieActions.getMovie, dispatch),
        changeVariable:bindActionCreators(movieActions.changeVariable,dispatch),
        increasePageNumber: bindActionCreators(movieActions.increasePageNumber, dispatch),
      },
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Filter);
  