import React from 'react'
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';
export class Create extends React.Component {
    constructor() {
        super();

        //This binds the data to the method
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeYear = this.onChangeYear.bind(this)
        this.onChangeColour = this.onChangeColour.bind(this)
        this.onChangeOwner = this.onChangeOwner.bind(this)
        this.onChangePicture = this.onChangePicture.bind(this)

        this.state = {
            Name: '',
            Description: '',
            Colour: '',
            Year: '',
            Owner: '',
            Picture: ''
        }
    }

    //Create a name 
    onChangeName(event) {
        this.setState({
            Name: event.target.value
        })
    }

    //Create a description 
    onChangeDescription(event) {
        this.setState({
            Description: event.target.value
        })
    }

    //Create a Year 
    onChangeYear(event) {
        this.setState({
            Year: event.target.value
        })
    }

    //Create a Colour 
    onChangeColour(event) {
        this.setState({
            Colour: event.target.value
        })
    }

    //Create a Owner 
    onChangeOwner(event) {
        this.setState({
            Owner: event.target.value
        })
    }

    //Create a Picture link
    onChangePicture(event) {
        this.setState({
            Picture: event.target.value
        })
    }

    //Button that for when that it is clicked it submits the data
    onSubmit(event) {
        event.preventDefault()
        const newGuitar = {
            Name: this.state.Name,
            Colour: this.state.Colour,
            Year: this.state.Year,
            Owner: this.state.Owner,
            Description: this.state.Description,
            Picture: this.state.Picture
        }
        //Post the data
        axios.post('http://localhost:4000/create', newGuitar)
            .then((response) => {
                console.log(response)
                this.props.ReloadPage()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
                <form onSubmit={this.onSubmit} action="/create" method="POST">
                {/* These are textareas to input this information*/}
                <Container className="container">

                    <FloatingLabel controlId="floatingTextarea2" label="Name:">
                        <Form.Control
                            as="textarea"
                            style={{ height: '60px' }}
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        />
                    </FloatingLabel>


                    <FloatingLabel controlId="floatingTextarea2" label="Description:">
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            value={this.state.Description}
                            onChange={this.onChangeDescription}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Colour:">
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            value={this.state.Colour}
                            onChange={this.onChangeColour}
                        />
                    </FloatingLabel>



                    <FloatingLabel controlId="floatingTextarea2" label="Year:">
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            value={this.state.Year}
                            onChange={this.onChangeYear}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Owner:">
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            value={this.state.Owner}
                            onChange={this.onChangeOwner}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Picture:">
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            value={this.state.Picture}
                            onChange={this.onChangePicture}
                        />
                    </FloatingLabel>        
                    <div class="button">
                      <a href="http://localhost:3000/read"> <input type="submit" value="Add"
                            className="btn btn-danger"></input></a> 
                    </div>
                    </Container>
           </form>

        );
    }
}