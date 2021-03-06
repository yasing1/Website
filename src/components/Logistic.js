import React, { Component } from 'react'
import Header from './Header';
import {Col} from "reactstrap";
import RBCarousel from "react-bootstrap-carousel";
import Fransa from "../assets/img/paris.jpg";
import Italya from "../assets/img/italya.jpg";
import Ispanya from "../assets/img/ispanya.jpg";
import Almanya from "../assets/img/almanya.jpg";



export default class Logistic extends Component {
    constructor(props) {
        super(props);
        this.state = {
          autoplay: true
        };
      }
      onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
      };
      visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
      };
      slideNext = () => {
        this.slider.slideNext();
      };
      slidePrev = () => {
        this.slider.slidePrev();
      };
      goToSlide = () => {
        this.slider.goToSlide(4);
      };
      autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
      };
      _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
      };
    render() {
        let { leftIcon, rightIcon } = this.state;
        return (
            <div>
              <Header/>
                <Col span={0} style={{ paddingTop: "0px", height: '100%' , width: "100%", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'fixed'}}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
                <div style={{ height: '100%' , width: "100%", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={Almanya}
                />
                <div className="carousel-caption">Almanya</div>
              </div>
              <div style={{ height: '100%' }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={Italya}
                />
                <div className="carousel-caption">İtalya</div>
              </div>
              <div style={{ height: '100%' }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={Fransa}
                />
                <div className="carousel-caption">Fransa</div>
              </div>
              <div style={{ height: '100%' }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={Ispanya}
                />
                <div className="carousel-caption">İspanya</div>
              </div>
              </RBCarousel>
          </Col>
                <p style ={{ fontSize: '20pt', position: 'fixed', left: '10%', top: '50%', color: '#2F2F2F'}}> Avrupa, Ortadoğu ve Balkanlar’a giden yolun başlangıcı… </p>
            </div>
        )
    }
}
