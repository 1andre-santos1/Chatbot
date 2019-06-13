import React, { Component }  from 'react';
import './ListaVagas.css';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Vaga from './Vaga'
import axios from 'axios'

class ListaVagas extends Component{
    constructor(props){
        super(props);
        this.state={
            vagas:[]
        }
    }
    async componentDidMount(){
        let APIURL = "http://localhost:8000/api/jobs/";
        let response = await axios.get(APIURL);
        let auxArray = [...this.state.vagas];
        
        for(let i = 0; i < response.data.length; i++)
        {
            let curVaga = response.data[i];
            let responseLocalizacao = await axios.get(`http://localhost:8000/api/location/${curVaga.location}`);
            let vaga = {
                area: curVaga.name,
                localizacao: responseLocalizacao.data[0].name,
                descricao: curVaga.candidateDescript,
                data: curVaga.createdAt.substring(0,curVaga.createdAt.indexOf('T'))
            };
            auxArray.push(vaga);
        }
        this.setState({
            vagas: auxArray
        });
    }
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
                        {this.state.vagas.map(v => 
                            <Vaga 
                                area={v.area} 
                                localizacao={v.localizacao}
                                descricao={this.stringToArray(v.descricao)}
                                data={v.data}
                            />
                        )}
                    </Accordion>
                </div>
                <img id="chatbotIcon" src={require('../images/ChatbotIcon.png')}  />
            </div>
        );
    }
}

export default ListaVagas;