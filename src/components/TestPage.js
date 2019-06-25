import React, { Component } from 'react';
import Header2 from './Header2'
import ContactBar from './ContactBar'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

export default class TestPage extends Component {
    render() {
        return (
            <div>
                <ContactBar/>   
                <Header2/>
                <img src = {require('../assets/img/world-map.png')}
                style= {{

                    left: '40px',
                    position: 'fixed',
                    top: '150px',
                    opacity: '0.5'
                }}>
                </img>
                <div style= {{ position: 'relative', left: '-20px', top: '200px', fontSize: '22pt'}}>
                    <p style={{
                        color: '#FFF',
                        left: '25%',
                        position: 'absolute'
                        
                    }}>
                        Avrupa, Ortadoğu ve Balkanlar’a giden yolun başlangıcı…
                    </p>
                    <p style= 
                    {{
                        position: 'relative',
                        top: '100px',
                        left: '35%',
                        fontSize: '16pt',
                        textAlign: 'center',
                        width: '500px'
                    }}
                    >
                    Güçlü acenta ağ ve araç desteğimizle hasarsız ,tam zamanında ve sizlerin memnuniyetinin öncelikli olduğu hizmet anlayışımızla;

Romanya, Bulgaristan, Arnavutluk, Kosova, Makedonya, Moldova, Sırbistan, Hırvatistan, Karadağ, Bosna Hersek, Yunanistan, Çek Cumhuriyeti, Polonya, Macaristan, Slovakya, Slovenya, Ukrayna, Rusya, Avrupa ve Türki Cumhuriyetlerde hizmet vermekteyiz. 
                    </p>
                </div>
            </div>
        )
    }
}
//Footer Eklenecek