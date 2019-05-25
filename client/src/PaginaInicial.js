import React, { Component }  from 'react';
import './PaginaInicial.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

function PaginaInicial() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">ASAF Enterprise</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Acerca de Nós</Nav.Link>
          <Nav.Link href="#features">Oportunidades de Emprego</Nav.Link>
          <Nav.Link href="#pricing">Contactos</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Procure aqui..." className="mr-sm-2" />
        <Button variant="outline-info">Pesquisar</Button>
      </Form>
      </Navbar.Collapse>
  </Navbar>
  );
}

export default PaginaInicial;
