import React from 'react';
import PaginaInicial from './FrontOffice/PaginaInicial'
import ListaVagas from './FrontOffice/ListaVagas'
import VagasIndex from './BackOffice/VagasIndex'
import Login from './BackOffice/Login'

import { Switch, Route } from "react-router-dom";

const Main = () => (
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route path="/jobs" component={ListaVagas} /> 
      <Route path="/backOffice/jobs" component={VagasIndex} />  
      <Route path="/login" component={Login} />  
    </Switch>
  );
  export default Main;
