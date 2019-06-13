import React, { Component }  from 'react';
import './ListaVagas.css';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Vaga from './Vaga'

class ListaVagas extends Component{
    stringToArray(str){
        let ar = str.split(";");
        ar.pop();
        return ar;
    }
    render(){
        return(
            <div>
                <div class="PageBanner">
                    <img src="https://cdn.pixabay.com/photo/2018/06/22/03/42/agreement-3489902_960_720.jpg"/>
                    <h3>Junta-te a nós!</h3>
                </div>
                <a id="LinkAdminVagas" href="/backOffice/jobs">Administrar Vagas</a>
                <div id="DropdownMenuContainer">
                    <Dropdown as={ButtonGroup}>
                        <Button >Área</Button>
                        <Dropdown.Toggle split id="dropdown-split-basic" />
                        <Dropdown.Menu className="DrowpdownMenu">
                            <Dropdown.Item hred="#/action-1">Todas</Dropdown.Item>
                            <Dropdown.Item hred="#/action-2">Consultadoria</Dropdown.Item>
                            <Dropdown.Item hred="#/action-3">Desenvolvimento</Dropdown.Item>
                            <Dropdown.Item hred="#/action-3">Infraestruturas</Dropdown.Item>
                            <Dropdown.Item hred="#/action-4">Outras</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup}>
                        <Button >Localização</Button>
                        <Dropdown.Toggle split id="dropdown-split-basic" />
                        <Dropdown.Menu className="DrowpdownMenu">
                            <Dropdown.Item hred="#/action-1">Todas</Dropdown.Item>
                            <Dropdown.Item hred="#/action-2">Lisboa</Dropdown.Item>
                            <Dropdown.Item hred="#/action-3">Porto</Dropdown.Item>
                            <Dropdown.Item hred="#/action-3">Tomar</Dropdown.Item>
                            <Dropdown.Item hred="#/action-4">Viseu</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id="VagasContainer">
                    <hr />
                    <Accordion>
                        <Vaga 
                            area="Consultor Júnior Cobol" 
                            localizacao="Lisboa"
                            descricao={this.stringToArray("Recém-licenciados em Engenharia Informática ou similares;Experiência em Cobol;")}
                            data="21/05/2019"
                        />
                    </Accordion>
                </div>
                <img id="chatbotIcon" src={require('../images/ChatbotIcon.png')}  />
            </div>
        );
    }
}

export default ListaVagas;