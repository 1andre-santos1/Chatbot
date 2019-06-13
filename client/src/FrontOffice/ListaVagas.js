import React, { Component }  from 'react';
import './ListaVagas.css';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class ListaVagas extends Component{
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
                        <div class="VagaContainer">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <span class="TextoPrincipal_Area">Consultor Júnior Cobol</span>
                                    <span class="TextoPrincipal_Localizacao">
                                        <img src={require('../images/geolocation.png')} />
                                        Lisboa
                                    </span>
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                            <span>Descrição do Perfil:</span>
                                            <ul>
                                                <li>Recém-licenciados em Engenharia Informática ou similares;</li>
                                                <li>Conhecimento de programação Cobol;</li>
                                                <li>Boa capacidade de aprendizagem e atitude proativa;</li>
                                                <li>Conhecimentos funcionais de HR</li>
                                            </ul>
                                            <span>Publicado em: 21/05/2019</span>
                                            <div class="VagaChatbot robotIcon"></div>
                                            <div class="VagaChatbotQuestion">
                                                Clica em mim se precisares de ajuda!
                                            </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                        <div class="VagaContainer">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <span class="TextoPrincipal_Area">Consultor Júnior Cobol</span>
                                    <span class="TextoPrincipal_Localizacao">
                                        <img src={require('../images/geolocation.png')} />
                                        Lisboa
                                    </span>
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                            <span>Descrição do Perfil:</span>
                                            <ul>
                                                <li>Recém-licenciados em Engenharia Informática ou similares;</li>
                                                <li>Conhecimento de programação Cobol;</li>
                                                <li>Boa capacidade de aprendizagem e atitude proativa;</li>
                                                <li>Conhecimentos funcionais de HR</li>
                                            </ul>
                                            <span>Publicado em: 21/05/2019</span>
                                            <div class="VagaChatbot robotIcon"></div>
                                            <div class="VagaChatbotQuestion">
                                                Clica em mim se precisares de ajuda!
                                            </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                        <div class="VagaContainer">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <span class="TextoPrincipal_Area">Consultor Júnior Cobol</span>
                                    <span class="TextoPrincipal_Localizacao">
                                        <img src={require('../images/geolocation.png')} />
                                        Lisboa
                                    </span>
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                            <span>Descrição do Perfil:</span>
                                            <ul>
                                                <li>Recém-licenciados em Engenharia Informática ou similares;</li>
                                                <li>Conhecimento de programação Cobol;</li>
                                                <li>Boa capacidade de aprendizagem e atitude proativa;</li>
                                                <li>Conhecimentos funcionais de HR</li>
                                            </ul>
                                            <span>Publicado em: 21/05/2019</span>
                                            <div class="VagaChatbot robotIcon">
                                            </div>
                                            <div class="VagaChatbotQuestion">
                                                Clica em mim se precisares de ajuda!
                                            </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </div>
                    </Accordion>
                </div>
                <img id="chatbotIcon" src={require('../images/ChatbotIcon.png')}  />
            </div>
        );
    }
}

export default ListaVagas;