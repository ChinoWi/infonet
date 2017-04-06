import React from 'react'

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { Button, Icon, Header,Menu,Grid,Modal,Popup } from 'semantic-ui-react'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


import Slider from 'react-slick'

const Home=React.createClass({
    render(){
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500
        };

        return(
            <div id="home">
                <div className="home-one">
                    <div className="columns text-center">
                        <div className="one-p">
                            <div className="row large-6 medium-6 columns" >
                                <h3>
                                    //Consultoria y Entramiento en Seguridad Informatica//
                                </h3>
                                <h1>
                                    Infonet Soluciones en
                                </h1>
                            </div>

                            <div className="row large-4 medium-6 columns">
                                <Slider {...settings}>
                                    <div><h1 style={{color:'#4cc1be'}}>Asesorias y Audotiras Web</h1></div>
                                    <div><h1 style={{color:'#4cc1be'}}>Segurindad Informatica</h1></div>
                                    <div><h1 style={{color:'#4cc1be'}}>Instalacion y servidores Linux</h1></div>
                                    <div><h1 style={{color:'#4cc1be'}}>Hacking Etico</h1></div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="row columns">
                    </div>
                </div>

                <div className="home-two">
                    <div className="columns">
                        <div className="row large-7 columns">
                            <h1>Hacking Etico y Seguridad Informatica para Empresas</h1>
                        </div>
                    </div>
                    <h1>section2</h1>
                </div>


            </div>
        )
    }
})

export default Home