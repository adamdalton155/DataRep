import './App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/Read';
import { Create } from './components/Create';
import { EditOwner } from './components/editOwner';
import { HomePage } from './components/HomePage';

class App extends Component {
  render() {
    return (
      //NavBar 
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Vintage Strats</Navbar.Brand>
              {/* Link the user to the different pages */}
              <Nav className="me-auto">
                <Nav.Link href="/">Homepage</Nav.Link>
                <Nav.Link href="/read">List of Stratocasters</Nav.Link>
                <Nav.Link href="/create">Add a Stratocaster</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

      {/*When user clicks on a link on the navbar, it will load in the component*/}
          <Switch>
          <Route path="/" component={HomePage} exact />
            <Route path="/read" component={Read} exact />
            <Route path="/create" component={Create} exact />
            <Route path="/edit/:id" component={EditOwner} exact />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
