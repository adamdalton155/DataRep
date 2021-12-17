import React from 'react'
import { GuitarItem } from './guitarItem'

export class Stratocasters extends React.Component{
    render(){
        return this.props.vintageStratocasters.map((strat)=>{
            return <GuitarItem strat={strat} ReloadPage={this.props.ReloadPage}></GuitarItem>
        })
           
    }
}