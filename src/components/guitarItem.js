import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
export class GuitarItem extends React.Component {

    constructor() {
        super()
        this.Remove = this.Remove.bind(this)
    }

    //Function that when clicked it will remove all the data assocatied with it and then reload the page
    Remove(event) {
        event.preventDefault()
        axios.delete('http://localhost:4000/read/' + this.props.strat._id)
            .then(() => {
                this.props.ReloadPage()
            })
            .catch()

    }

    render() {
        return (
            //React Bootstrap cards that displays the information from the mongo database
            <div className="carouselContainer">
                <Container >
                    <Row>
                        <Col sm={3}>
                            <Card >
                                <Card.Img variant="top" src={this.props.strat.Picture} />
                                <Card.Body>
                                    <Card.Title>{this.props.strat.Name}</Card.Title>
                                    <Card.Text>
                                        {this.props.strat.Description}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{this.props.strat.Colour}</ListGroupItem>
                                    <ListGroupItem>{this.props.strat.Year}</ListGroupItem>
                                    <ListGroupItem>{this.props.strat.Owner}</ListGroupItem>
                                </ListGroup>
                                <Link to={"/edit/" + this.props.strat._id} className="btn btn-success">Edit {this.props.strat.Name}</Link>
                                <Button variant="danger" onClick={this.Remove}>Remove</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}