import React, { Component }  from 'react';
import './ListaVagas.css';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function ListaVagas(){
    return(
    <div>
        <div class="PageBanner">
            <img src="https://cdn.pixabay.com/photo/2018/06/22/03/42/agreement-3489902_960_720.jpg"/>
            <h3>Junta-te a nós!</h3>
        </div>
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
            <div class="VagaContainer">
            <Accordion>
                <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                <span class="TextoPrincipal_Area">Service Desk</span>
                                <span class="TextoPrincipal_Localizacao">
                                    <img src={require('./geolocation.png')} />
                                    Tomar
                                </span>
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                                <span>Descrição do Perfil:</span>
                                <ul>
                                    <li>Trabalho de Equipa</li>
                                    <li>Conhecimento de Inglês e Espanhol</li>
                                </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                <span class="TextoPrincipal_Area">.NET Developer</span>
                                <span class="TextoPrincipal_Localizacao">
                                    <img src={require('./geolocation.png')} />
                                    Viseu
                                </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                                <span>Descrição do Perfil:</span>
                                <ul>
                                    <li>Experiência em tecnologias .NET</li>
                                    <li>Conhecimento minímo de Inglês</li>
                                </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                <span class="TextoPrincipal_Area">Programador Web</span>
                                <span class="TextoPrincipal_Localizacao">
                                    <img src={require('./geolocation.png')} />
                                    Lisboa
                                </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                                <span>Descrição do Perfil:</span>
                                <ul>
                                    <li>Capacidade de análise de requisitos</li>
                                    <li>Domínio de tecnologias Web: Java, .NET, SQL e Javascript</li>
                                </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                
            </div>
        </div>
        <img id="chatbotIcon" src={require('./ChatbotIcon.png')}  />
    </div>
    );
}

export default ListaVagas;