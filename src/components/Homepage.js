import React, { Component } from 'react';
import Header from "./Header";
import Tir from "../assets/img/tir.jpg";
import RBCarousel from "react-bootstrap-carousel";

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Header />
            <div>
                
                <br /> <br /> <br />
                <RBCarousel
            >
                <div style={{ height: 400, width: "100%" }}>
                <img
                  style={{justifyContent:"center", width: "100%", height: "100%" }}
                  src={Tir}
                />
                <div className="carousel-caption">Slogan</div>
              </div>
             
              </RBCarousel>
            </div>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            Deneme<br/>
            </div>
        )
    }
}
//Footer Eklenecek