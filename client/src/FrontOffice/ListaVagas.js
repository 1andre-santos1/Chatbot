import React, { Component }  from 'react';
import './ListaVagas.css';
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Vaga from './Vaga'
import axios from 'axios'
import JanelaChatGeral from './JanelaChatGeral'
import DropdownAPI from './DropdownAPI'

class ListaVagas extends Component{
    constructor(props){
        super(props);
        this.state={
            vagas:[],
            isShowingChatGeral: false,
            chatGeralIconClassName: 'rotate-in-center',
            areas: [],
            localizacoes: []
        }
        this.handleShowChatGeral = this.handleShowChatGeral.bind(this);
    }
    async componentDidMount(){
        let APIURL = "http://localhost:8000/api/jobs/";
        let response = await axios.get(APIURL);
        let auxArray = [...this.state.vagas];

        let areasSet = [];
        let localizacoesSet = [];
        
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

            if(localizacoesSet.indexOf(vaga.localizacao) === -1)
                localizacoesSet.push(vaga.localizacao);
        }

        let areasAux = [];
        let localizacoesAux = [];

        let responseAreas = await axios.get('http://localhost:8000/api/areas')
        for(let i = 0; i < responseAreas.data.length; i++)
            areasAux.push({nome: responseAreas.data[i].name, id: i})

        for(let i = 0; i < localizacoesSet.length; i++)
            localizacoesAux.push({nome: localizacoesSet[i], id: i});

        this.setState({
            vagas: auxArray,
            areas: areasAux,
            localizacoes: localizacoesAux
        });
    }
    stringToArray(str){
        let ar = str.split(";");
        ar.pop();
        return ar;
    }
    handleShowChatGeral(){
        let newClassName = (this.state.chatGeralIconClassName === 'rotate-center') ? 'rotate-in-center' : 'rotate-center';
        this.setState({
            isShowingChatGeral: !this.state.isShowingChatGeral,
            chatGeralIconClassName: newClassName
        });
    }
    
    render(){
        return(
            <div>
                <div class="PageBanner">
                    <img src="https://cdn.pixabay.com/photo/2018/06/22/03/42/agreement-3489902_960_720.jpg"/>
                    <h3>Junta-te a nós!</h3>
                </div>
                {
                    (sessionStorage.getItem('token') != null) &&
                     <a id="LinkAdminVagas" href="/backOffice/jobs">Administrar Vagas</a>
                }
                <div id="DropdownMenuContainer">
                    <DropdownAPI nome="Área" list={this.state.areas}/>
                    <DropdownAPI nome="Localização" list={this.state.localizacoes} />
                </div>
                <div id="VagasContainer">
                    <hr />
                    <Accordion>
                        {this.state.vagas.map((v,index) => (
                            <Vaga 
                                area={v.area} 
                                localizacao={v.localizacao}
                                descricao={this.stringToArray(v.descricao)}
                                data={v.data}
                                id={index}
                            />
                        ))}
                    </Accordion>
                </div>
                <div onClick={this.handleShowChatGeral} id="chatbotIcon">
                    {(this.state.isShowingChatGeral) ?  
                        <img className={this.state.chatGeralIconClassName} src={require('../images/ChatbotIcon_Close.png')}/>  :
                        <img className={this.state.chatGeralIconClassName} src={require('../images/ChatbotIcon_Message.png')}/>
                    }
                </div>
                {this.state.isShowingChatGeral && <JanelaChatGeral />}
            </div>
        );
    }
}

export default ListaVagas;