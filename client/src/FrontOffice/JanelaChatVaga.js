import React, {Component} from 'react'
import axios from 'axios'
import './JanelaChatVaga.css'

class JanelaChatVaga extends Component{
    constructor(props){
        super(props);
        this.state={
            inicioConversa: null,
            pergunta: '',
            dialog: [],
            className: 'slide-in-blurred-bottom'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount(){
        let response = await axios.post(
            '//localhost:8000/conversation',
            {text:''}
        );

        this.setState({
            inicioConversa: <span className="JanelaChatVaga-Node-Chatbot">{response.data.output.text[0]}</span>
        });
    }
    async handleSubmit(evt){
        evt.preventDefault();

        if(this.state.pergunta === '')
            return;

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

            if(apiRequests[i].includes(",count"))
            {
                apiRequests[i] = apiRequests[i].replace(",count","");

                let apiResponse = await axios.get(`http://localhost:8000${apiRequests[i]}`);

                watsonResponse = watsonResponse.replace("{"+apiRequests[i]+",count}",apiResponse.data.length);
            }
            else{
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
            className:(tipo === "chatbot") ? "JanelaChatVaga-Node-Chatbot scale-up-center" : "JanelaChatVaga-Node-User scale-up-center"
        };
        
        let auxAr = [...this.state.dialog];
        auxAr.push(obj);

        this.setState({
            dialog: auxAr
        });

        let formObj = document.getElementsByClassName('JanelaChatVaga-Dialog')[0];
        formObj.scrollTop = formObj.scrollHeight;
    }
    render(){
        return(
            <div className={"JanelaChatVaga "+this.state.className}>
                <div className="JanelaChatVaga-Banner">
                   <span className="JanelaChatVaga-Banner-Title">
                        {this.props.area} 💼
                    </span>
                </div>
                <div className="JanelaChatVaga-Dialog">
                    {this.state.inicioConversa}
                    {this.state.dialog.map(n => 
                        <span className={n.className}>{n.text}</span>
                    )}
                </div>
                <div className="JanelaChatVaga-Form">
                    <form onSubmit={this.handleSubmit} autoComplete="off">
                        <input onChange={this.handleChange} className="JanelaChatGeral-Form-Input" 
                            placeholder="Pergunte aqui..." name="pergunta" value={this.state.pergunta}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default JanelaChatVaga;