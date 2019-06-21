import React, {Component} from 'react'
import './JanelaChatGeral.css'
import axios from 'axios'

class JanelaChatGeral extends Component{
    constructor(props){
        super(props);
        this.state={
            pergunta: '',
            dialog: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async handleSubmit(evt){
        evt.preventDefault();

        this.adicionarMensagem(this.state.pergunta,"user");

        var response = await axios.post(
            '//localhost:8000/conversation',
             {text:this.state.pergunta}
        );

        var watsonResponse = response.data.output.text[0];

        var apiRequests = [],          // an array to collect the strings that are found
            rxp = /{([^}]+)}/g,
            str = watsonResponse,
            curMatch;

        while( curMatch = rxp.exec( str ) ) {
            apiRequests.push( curMatch[1] );
        }

        for(let i = 0; i < apiRequests.length; i++){
            let apiResponse = await axios.get(`http://localhost:8000${apiRequests[i]}`);

            let values = [];
            for(let j = 0; j < apiResponse.data.length; j++){
                values.push(apiResponse.data[j].name);
            }

            let strAux = '';
            for(let j = 0; j < values.length; j++){
                strAux += values[j];
                if(j < values.length -1)
                    strAux += ', '
            }

            watsonResponse = watsonResponse.replace("{"+apiRequests[i]+"}", strAux);

        }   

        this.adicionarMensagem(watsonResponse,"chatbot");

        this.setState({
            pergunta: ''
        })
    }
    handleChange(evt){
        this.setState({
            pergunta: evt.target.value
        })
    }
    adicionarMensagem(str,tipo){
        let obj = {
            text: str, 
            className:(tipo === "chatbot") ? "JanelaChatGeral-Node-Chatbot" : "JanelaChatGeral-Node-User"
        };
        
        let auxAr = [...this.state.dialog];
        auxAr.push(obj);

        this.setState({
            dialog: auxAr
        });
    }
    render(){
        return(
            <div className="JanelaChatGeral">
               <div className="JanelaChatGeral-Dialog">
                <span className="JanelaChatGeral-Node-Chatbot">Olá o que queres saber?</span>
                {this.state.dialog.map(n => 
                    <span className={n.className}>{n.text}</span>
                )}
               </div>
               <div className="JanelaChatGeral-Form">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} className="JanelaChatGeral-Form-Input" 
                        placeholder="Pergunte aqui..." name="pergunta" value={this.state.pergunta}/>
                    <button className="JanelaChatGeral-Form-Button" type="submit">Enviar</button>
                </form>
               </div>
            </div>
        );
    }
}

export default JanelaChatGeral;