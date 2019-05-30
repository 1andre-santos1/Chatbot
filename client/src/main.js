import React from 'react';
import PaginaInicial from './PaginaInicial'
import ListaVagas from './ListaVagas'
import VagasIndex from './BackOffice/VagasIndex'
import Login from './BackOffice/Login'

import { Switch, Route } from "react-router-dom";

const Main = () => (
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route path="/ListaVagas" component={ListaVagas} /> 
      <Route path="/BackOffice/VagasIndex" component={VagasIndex} />  
      <Route path="/Login" component={Login} />  
    </Switch>
  );
  export default Main;
