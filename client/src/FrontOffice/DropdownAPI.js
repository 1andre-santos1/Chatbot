import React, {Component} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import './DropdownAPI.css'

class DropdownAPI extends Component{
    handleChange(){

    }
    render(){
        return(
            <div className="DropdownAPI">
                <Dropdown as={ButtonGroup}>
                    <Button >{this.props.nome}</Button>
                    <Dropdown.Toggle split id="dropdown-split-basic" />
                        <Dropdown.Menu className="DrowpdownMenu" >
                            <Dropdown.Item  >Todas</Dropdown.Item>
                            {
                                this.props.list.map((i,index) => 
                                    <Dropdown.Item >{i.nome}</Dropdown.Item>
                                )
                            }
                            <Dropdown.Item hred="#/action-4" >Outras</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
            </div>
        );  
    }
}

export default DropdownAPI;