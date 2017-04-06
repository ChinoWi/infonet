import React,{Component} from 'react';
import {NavLink,Link} from 'react-router-dom'

import { react_icon } from '../../assets/icons';

import { Button, Icon, Header,Menu,Grid,Modal,Popup } from 'semantic-ui-react'
import $ from 'jquery'

const borderStyle={
    border:'1px solid red',
}

const MenuSubMenu=React.createClass({
    getInitialState(){
        return{
            show1: true,
            show2:false,
            show3:false,
            show4:false,
        };
    },

    getOptionInicio(){
        return(
            <div>
                <div className="large-3 medium-3 columns">Inicio</div>
                <div className="large-3 medium-3 columns">Inicio</div>
                <div className="large-3 medium-3 columns">Inicio</div>
                <div className="large-3 medium-3 columns">Inicio</div>
            </div>
        )
    },
    getOptionServicios(){
        return(
            <div>
                <div className="large-2 medium-2 columns">servicios</div>
                <div className="large-2 medium-2 columns">servicios</div>
                <div className="large-2 medium-2 columns">servicios</div>
                <div className="large-2 medium-2 columns">servicios</div>
                <div className="large-2 medium-2 columns">servicios</div>
                <div className="large-2 medium-2 columns">servicios</div>
            </div>
        )
    },
    getOptionNosotros(){
        return(
            <div>
                <div className="large-3 medium-3 columns">Nosotros</div>
                <div className="large-3 medium-3 columns">Nosotros</div>
                <div className="large-3 medium-3 columns">Nosotros</div>
                <div className="large-3 medium-3 columns">Nosotros</div>
            </div>
        )
    },
    getOptionContacto(){
        return(
            <div>
                <div className="large-2 medium-2 columns">Contacto</div>
                <div className="large-2 medium-2 columns">Contacto</div>
                <div className="large-2 medium-2 columns">Contacto</div>
                <div className="large-2 medium-2 columns">Contacto</div>
                <div className="large-2 medium-2 columns">Contacto</div>
                <div className="large-2 medium-2 columns">Contacto</div>
            </div>
        )
    },

    onMouseEnterHandlerInicio: function(e){
        e.preventDefault();
        this.setState({show1: true,show2:false, show3:false,show4:false});
    },
    onMouseEnterHandlerServices: function(e){
        e.preventDefault();
        this.setState({show1: false,show2:true,show3:false,show4:false});
    },
    onMouseEnterHandlerNosotros: function(e){
        e.preventDefault();
        this.setState({show1:false, show2:false,show3:true,show4:false});
    },
    onMouseEnterHandlerContacto: function(e){
        e.preventDefault();
        this.setState({show1:false,show2:false,show3:false,show4:true});
    },

    render(){
        return(
            <div>
                <div className="rowd">
                    <div className="menu-navv">
                        <ul className="row">
                            <li>
                                <Link to='/' onMouseEnter={this.onMouseEnterHandlerInicio}>INICIO</Link>
                            </li>
                            <li>
                                <Link to='/empresa' onMouseEnter={this.onMouseEnterHandlerServices}>EMPRESA</Link>
                            </li>
                            <li>
                                <Link to='/servicios' onMouseEnter={this.onMouseEnterHandlerNosotros}>SERVICIOS</Link>
                            </li>
                            <li>
                                <Link to='/clientes' onMouseEnter={this.onMouseEnterHandlerContacto}>CLIENTES</Link>
                            </li>
                            <li>
                                <Link to='/contacto' onMouseEnter={this.onMouseEnterHandlerContacto}>CONTACTO</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="rowdd">
                    <div className="row text-center" >
                        {this.state.show1 ? this.getOptionInicio() : null}
                        {this.state.show2 ? this.getOptionServicios() : null}
                        {this.state.show3 ? this.getOptionNosotros() : null}
                        {this.state.show4 ? this.getOptionContacto() : null}
                    </div>
                </div>
            </div>
        )
    }
})


const Prueba=React.createClass({

    getInitialState(){
        return{
            activeItem: 'closest'
        };
    },
    componentDidMount(){
        $(document).ready(function(){
            $('#headers ul li a').click(function(){
                $('li a').removeClass("active");
                $(this).addClass("active");
            });
        });
    },



    handleItemClick(e,{name}){
        this.setState({
            activeItem: name
        })
    },


    render(){
        const { activeItem } = this.state
        return(
            <div>
                <header id="headers">
                    <div className="row">
                        <div className="top-bar">
                            <div className="large-4 medium-3 columns text-left" >
                                <Link to="/" ><img src={react_icon} className="logo" /></Link>
                            </div>
                            <div className="large-8 medium-9 columns text-center" >
                                <div className="columns text-right">
                                    <div className="large-8 medium-8 columns" >
                                        <Button animated='fade' >
                                            <Button.Content visible >
                                                <Icon name="student"></Icon>Ingreso a Plataforma
                                            </Button.Content>
                                            <Button.Content hidden href="/moodle/">
                                                Click aqui
                                            </Button.Content>
                                        </Button>
                                    </div>
                                    <div className="large-4 medium-4 columns" style={{border:'1px solid green'}}>
                                        <Button color='facebook' icon='facebook' />
                                        <Button color='twitter' icon='twitter' />
                                        <Button color='linkedin' icon='linkedin' />
                                        <Button color='google plus' icon='google plus' />
                                    </div>

                                </div>
                                <div className="columns text-right" style={{border:'1px solid blue'}}>
                                    <div className="row" style={{paddingLeft:'150px',border:'1px solid red'}}>
                                        sdfsd
                                        <Menu text>
                                            <Menu.Item href="#terminosycondiciones" name='Termino y Condiciones' active={activeItem === 'Termino y Condiciones'} onClick={this.handleItemClick}/>
                                            <Menu.Item name='mostComments'  active={activeItem === 'mostComments'} onClick={this.handleItemClick}/>
                                            <Menu.Item name='mostPopular'  active={activeItem === 'mostPopular'} onClick={this.handleItemClick}/>
                                        </Menu>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    asdfsad

                </header>
            </div>
        )
    }
})

const Headers=React.createClass({
    getInitialState(){
        return{
            activeItem: 'closest'
        };
    },

    handleItemClick(e,{name}){
        this.setState({
            activeItem: name
        })
    },
    render(){
        const { activeItem } = this.state
        return(
            <div id="head">
                <div className="row" style={{}}>
                    <div className="large-4 medium-4 columns" >
                        <div className="columns" >
                            <div className="head-logo">
                                <Link to="/" ><img src={react_icon} className="logo" /></Link>
                            </div>
                        </div>
                        <div className="columns" >
                            <div className="logo-text">
                                <Header as="h4" color="black">Infonet Soluciones, Hackint Ético</Header>
                            </div>
                        </div>
                    </div>


                    <div className="large-8 medium-8 columns" >
                            <div className="columns" >
                                <div className="large-4 columns text-center" style={{paddingTop:'15px',paddingBottom:'10px'}}>
                                    <Button href="https://www.facebook.com/infonetsolucionesperu" color='facebook' icon='facebook' />
                                    <Button color='twitter' icon='twitter' />
                                    <Button color='linkedin' icon='linkedin' />
                                    <Button color='google plus' icon='google plus' />
                                </div>
                                <div className="large-8 columns text-right" style={{paddingTop:'10px',paddingBottom:'10px'}}>
                                    <Button animated='fade' >
                                        <Button.Content visible >
                                            <Icon name="student"></Icon>Ingreso a Plataforma
                                        </Button.Content>
                                        <Button.Content hidden href="/moodle/">
                                            Click aqui
                                        </Button.Content>
                                    </Button>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="itemMenu text-right" >
                                    <ul>
                                        <li><a href="#" >Terminos y Condiciones</a></li>
                                        <li><a href="#">Prueba</a></li>
                                        <li><a href="#">Security</a></li>
                                        <li><a href="#">Security</a></li>
                                    </ul>
                                </div>
                            </div>

                    </div>
                </div>
                <MenuSubMenu/>
            </div>



        )
    }
})


export default Headers