import React from "react";

import Home from "./components/home/home";
import Compra from "./components/compra/compra";

import { Switch, Route } from 'react-router-dom'

import { Container } from 'react-materialize';

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/compra' component={Compra}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;