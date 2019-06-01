import React from 'react';
import PaginaInicial from './PaginaInicial'
import ListaVagas from './ListaVagas'
import VagasIndex from './BackOffice/VagasIndex'
import Login from './BackOffice/Login'

import { Switch, Route } from "react-router-dom";

const Main = () => (
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route path="/jobsList" component={ListaVagas} /> 
      <Route path="/backOffice/jobsIndex" component={VagasIndex} />  
      <Route path="/login" component={Login} />  
    </Switch>
  );
  export default Main;
