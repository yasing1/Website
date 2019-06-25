import React, { Component } from 'react';
import Header from "./Header";
import Tir from "../assets/img/tir.jpg";
import RBCarousel from "react-bootstrap-carousel";
import Parallax1 from './Parallax/ParallaxBG'
import Card from './Card/Card'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
            <div>
                <Parallax1/>
            </div>
            <Card 
            header= "Who we are?"
            text = "the best logistic company ever existed"
            buttonText = "About"
            />
            <Parallax1/>
            <Card 
            header= "Where do we go?"
            text = "anywhere you can imagine!"
            buttonText = "Logistic"
            />
            <div style = {{height: '5000px'}}></div>
            </div>
        )
    }
}
//Footer Eklenecek