import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Detay from "../detail/Detay";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route  path="/moviedetail" component={Detay}></Route>
      </Switch>
    </Container>
  );
}

export default App;
