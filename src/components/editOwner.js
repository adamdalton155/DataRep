import React from 'react'
import axios from 'axios';
export class EditOwner extends React.Component {
    constructor() {
        super();
        //This binds the data to the method
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeColour = this.onChangeColour.bind(this)
        this.onChangeOwner = this.onChangeOwner.bind(this)

        this.state = {
            Colour: '',
            Owner: ''
        }
    }

    //This sets the updated data and posts it to read component
    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get('http://localhost:4000/read/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    _id: response.data._id,
                    Owner: response.data.Owner,
                    Colour: response.data.Colour
                })
            })
            .catch((error) => {
                console.log(error)
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

    //Button that for when that it is clicked it submits the data
    onSubmit(event) {
        event.preventDefault()
        const newGuitar = {
            Colour: this.state.Colour,
            Owner: this.state.Owner,
            _id: this.state._id
        }
        axios.put('http://localhost:4000/read/' + this.state._id, newGuitar)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            // These are textareas to input this information*
            <div className="App">
                <form onSubmit={this.onSubmit} action="/create" method="POSTnp">
                    <div className="form-group">

                        <div className="form-group">
                            <label>Update Colour: </label>
                            <textarea type="text"
                                className="form-control"
                                onChange={this.onChangeColour}
                            />
                        </div>
                        <div className="form-group">
                            <label>Update Owner: </label>
                            <textarea type="text"
                                className="form-control"
                                onChange={this.onChangeOwner}
                            />
                        </div>

                        <div>
                            <input type="submit" value="Edit Details"
                                className="btn btn-danger"></input>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}