import React, { Component } from 'react';
import Header2 from './Header2'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
import './ContactBar.css'
export default class ContactBar extends Component {
    render() {
        return (
            <div>
                <div className="Bar">
                    <img className="Logo"
                    src= {require("../assets/img/polatrans-logo.jpg")}/>

                    <div className="Contact">
                            Telefon:<br/> +90 212 432 55 95
                    </div>
                    <div className="Mail">
                        Mail:<br/> info@polatrans.com
                    </div>
                    <div className= "SocialMedia" >
                        <img src = "https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"/>
                        <img src = "https://image.flaticon.com/icons/svg/124/124010.svg"/>
                        <img src = "https://image.flaticon.com/icons/svg/1409/1409946.svg"/>

                    </div>
                </div>

            </div>
        )
    }
}
//Footer Eklenecek