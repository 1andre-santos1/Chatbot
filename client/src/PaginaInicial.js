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
    <div>
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
  <Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2018/02/16/10/52/beverage-3157395_960_720.jpg" alt="First slide" />
    <Carousel.Caption>
      <h3>ASAF Enterprise</h3>
      <p>Soluções simples e eficazes, venha conhecer-nos</p>
      <Button variant="outline-info">Conhecer Empresa</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" alt="Third slide" />
    <Carousel.Caption>
      <h3>Recrutamento</h3>
      <p>Não perca a oportunidade de trabalhar numa super-equipa!</p>
      <Button variant="outline-info">Ver Vagas</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_960_720.jpg" alt="Third slide" />
    <Carousel.Caption>
      <h3>Contacto</h3>
      <p>Tem alguma dúvida sobre nós? Contacte-nos já!</p>
      <Button variant="outline-info">Ver Contacto</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}

export default PaginaInicial;
