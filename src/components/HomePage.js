import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class HomePage extends React.Component {
    render() {
        return (
            //Homepage that displays three images on a carousel on the homepage with a welcome message
            <div>
                <h1>Welcome to Vintage Stratocasters</h1>
            <Container className="carousel">
                <Carousel> 
                    <Carousel.Item interval="5000">
                        <img style={{height:600, width: 950}}
                    
                            className="d-block"
                            src="https://www.rollingstone.com/wp-content/uploads/2021/10/clapton-76-podcast.jpg?resize=1800,1200&w=1800"
                            alt="First slide"
                        />
                        <Carousel.Caption> 
                        <h4>Eric Clapton</h4>   
                        </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item interval="5000">
                        <img style={{height:600, width: 950 }}
                            className="d-block"
                            src="https://pyxis.nymag.com/v1/imgs/2bb/8b3/2ee63c978f3371d0114e0f4205051824f2-10-tom-morello.rhorizontal.w1200.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h4>Tom Morello</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval="5000">
                        <img style={{height:600, width: 950 }}
                            className="d-block "
                            src="https://cdn.mos.cms.futurecdn.net/pfG6nG35KhLqdKDjbH6XHY.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h4>Jimi Hendrix</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

        </Container>
        </div>
        )

    }
}