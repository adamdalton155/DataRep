import React from 'react'
import { Stratocasters } from './Stratocasters'
import axios from 'axios'
export class Read extends React.Component{

    constructor(){
        super()
        this.ReloadPage = this.ReloadPage.bind(this)
    }

    //Array to store the MongoDB data in
    state = {
        vintageStratocasters: [ ]
    }

    //Gets the data on from mongo and sets it
    componentDidMount(){
        axios.get('http://localhost:4000/read')
        .then((response)=>{
            this.setState({vintageStratocasters: response.data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    //Reloads the page /read
    ReloadPage(){
        axios.get('http://localhost:4000/read')
        .then((response)=>{
            this.setState({vintageStratocasters: response.data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    render(){
        return(
            <div>
                <h1>Some Iconic Stratocasters</h1>
            {/*Display the mongodb data on the page I */}
                <Stratocasters vintageStratocasters={this.state.vintageStratocasters} ReloadPage={this.ReloadPage}></Stratocasters>
            </div>    
        );
    }
}
