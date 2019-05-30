import React from 'react';
import PaginaInicial from './PaginaInicial'
import ListaVagas from './ListaVagas'
import VagasIndex from './BackOffice/VagasIndex'

import { Switch, Route } from "react-router-dom";

const Main = () => (
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route path="/ListaVagas" component={ListaVagas} /> 
      <Route path="/BackOffice/VagasIndex" component={VagasIndex} />  
    </Switch>
  );
  export default Main;
