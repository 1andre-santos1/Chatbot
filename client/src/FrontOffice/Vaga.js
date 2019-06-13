import React,{Component} from 'react'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import './Vaga.css'

class Vaga extends Component{
    render(){
        return(
            <div className="Vaga">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <span class="TextoPrincipal_Area">{this.props.area}</span>
                                    <span class="TextoPrincipal_Localizacao">
                                        <img src={require('../images/geolocation.png')} />
                                        {this.props.localizacao}
                                    </span>
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                            <span>Descrição do Perfil:</span>
                                            <ul>
                                                {this.props.descricao.map(d => <li>{d}</li>)}
                                            </ul>
                                            <span>Publicado em: {this.props.data}</span>
                                            <div class="VagaChatbot robotIcon"></div>
                                            <div class="VagaChatbotQuestion">
                                                Clica em mim se precisares de ajuda!
                                            </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
            </div>
        );
    }
}

export default Vaga;