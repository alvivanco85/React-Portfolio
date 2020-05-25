import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      title: "Aldo Vibanco",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "Portfolio", path: "/portfolio"},
        {title: "Contact", path: "/contact"},
      ],
      home: {
        title: "Web Development",
        subTitle: "Your Ideas brought to life!",
        text: "Find out more about me below."
      },
      portfolio: {
        title: "Prject Demos"
      },
      contact: {
        title: "Contact Me"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" bg="transparent" fluid={true}>

          <Navbar className="Navbar border-bottom" expand="lg">
            <Navbar.Brand>Aldo Vibanco</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar.toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
  
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/portfolio"  render={() => <PortfolioPage title={this.state.portfolio.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer/>

        </Container>
      </Router>
    )
  }
}

export default App;
