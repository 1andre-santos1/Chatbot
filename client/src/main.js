import React from 'react';
import PaginaInicial from './PaginaInicial'
import ListaVagas from './ListaVagas'

import { Switch, Route } from "react-router-dom";

const Main = () => (
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route path="/ListaVagas" component={ListaVagas} />  
    </Switch>
  );
  export default Main;
