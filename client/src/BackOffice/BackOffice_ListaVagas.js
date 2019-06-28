import React, { Component } from 'react';
import BackOffice_Vaga from './BackOffice_Vaga'
import axios from 'axios'
import uuid from 'uuid/v4'
import RemovePopup from './RemovePopup'
import jwt from 'jsonwebtoken';

class VagasIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vagas: [],
            isShowingRemovePopup: false,
            vagaToRemove: {}
        }
        this.removerVaga = this.removerVaga.bind(this);
        this.cancelarRemocaoVaga = this.cancelarRemocaoVaga.bind(this);
        this.removerVagaConfirmed = this.removerVagaConfirmed.bind(this);
    }
    async componentDidMount() {
        let response = await axios.get('http://localhost:8000/api/jobs/');
        let auxArray = [...this.state.vagas];

        for (let i = 0; i < response.data.length; i++) {
            let curVaga = response.data[i];
            let responseLocalizacao = await axios.get(`http://localhost:8000/api/location/${curVaga.location}`);
            let vaga = {
                area: curVaga.name,
                localizacao: responseLocalizacao.data[0].name,
                id: curVaga.id,
                descricao: curVaga.candidateDescript,
                data: curVaga.createdAt.substring(0, curVaga.createdAt.indexOf('T')),
                uuid: uuid()
            };
            auxArray.push(vaga);
        }
        this.setState({
            vagas: auxArray
        });

        //testeeeeeeeeeee

        this.testeToken();
    }
    testeToken() {
        try {
            var decoded = jwt.decode(sessionStorage.getItem('token'));
            console.log(decoded.username);
        } catch{
            window.location = "/login";
        }
    }
    stringToArray(str) {
        let ar = str.split(";");
        ar.pop();
        return ar;
    }
    removerVaga(uuid) {

        console.log('prompt de remoção')
        let vaga;
        let aux = [...this.state.vagas];
        for (let i = 0; i < aux.length; i++) {
            if (aux[i].uuid === uuid) {
                vaga = aux[i];
                break;
            }
        }
        if (vaga !== null) {
            this.setState({
                vagaToRemove: vaga,
                isShowingRemovePopup: true
            });
        }
    }
    cancelarRemocaoVaga() {
        console.log('cancela remoção de vaga')
        this.setState({
            vagaToRemove: {},
            isShowingRemovePopup: false
        });
    }
    async removerVagaConfirmed(uuid) {
        console.log('remover vaga')
        let vaga;
        let aux = [...this.state.vagas];
        for (let i = 0; i < aux.length; i++) {
            if (aux[i].uuid === uuid) {
                vaga = aux[i];
                break;
            }
        }

        if (vaga !== null) {
            await axios.delete(`http://localhost:8000/api/jobs/delete/${vaga.id}`);
            aux.filter(v => v !== vaga);
            this.setState({
                vagas: aux
            });
            this.setState({
                isShowingRemovePopup: false
            })
        }
    }
    render() {
        return (
            <div className="BackOffice_ListaVagas">
                {this.state.vagas.map(v =>
                    <BackOffice_Vaga
                        area={v.area}
                        localizacao={v.localizacao}
                        descricao={this.stringToArray(v.descricao)}
                        data={v.data}
                        id={v.id}
                        uuid={v.uuid}
                        removerVaga={this.removerVaga}
                    />
                )}
                {
                    this.state.isShowingRemovePopup &&
                    <RemovePopup
                        vaga={this.state.vagaToRemove}
                        removerVagaConfirmed={this.removerVagaConfirmed}
                        cancelarRemocaoVaga={this.cancelarRemocaoVaga} />
                }
                <h1>{sessionStorage.getItem('token').username}</h1>
            </div>

        );
    }
}

export default VagasIndex;