import React,{Component} from 'react';
import {NavLink,Link} from 'react-router-dom'

import { react_icon } from '../../assets/icons';

import { Button, Icon, Header,Menu } from 'semantic-ui-react'
import $ from 'jquery'

const borderStyle={
    border:'1px solid red',
}


const Headers=React.createClass({
    getInitialState(){
        return{
            show1: true,
            show2:false,
            show3:false,
            show4:false
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
        this.setState({
            show1: true,
            show2:false,
            show3:false,
            show4:false
        });
    },
    onMouseEnterHandlerServices: function(e){
        e.preventDefault();
        this.setState({
            show1: false,
            show2:true,
            show3:false,
            show4:false

        });
    },
    onMouseEnterHandlerNosotros: function(e){
        e.preventDefault();
        this.setState({
            show1:false,
            show2:false,
            show3:true,
            show4:false
        });
    },
    onMouseEnterHandlerContacto: function(e){
        e.preventDefault();
        this.setState({
            show1:false,
            show2:false,
            show3:false,
            show4:true
        });
    },
    render(){
        return(
            <div>
                <header id="headers">
                    <div className="row">
                        <div className="top-bar">
                            <div className="large-4 medium-3 columns text-left" >
                                <Link to="/" ><img src={react_icon} className="logo" /></Link>
                            </div>
                            <div className="large-8 medium-9 columns text-center" >
                                <div className="large-6 medium-6 columns" >
                                    <div className="columns text-center">
                                        <Button animated='fade'>
                                            <Button.Content visible>
                                                <Icon name="student"></Icon>Ingreso a Plataforma
                                            </Button.Content>
                                            <Button.Content hidden>
                                                Click aqui
                                            </Button.Content>
                                        </Button>
                                    </div>
                                    <div className="columns">
                                        fsadf
                                    </div>
                                    <div className="columns">
                                        fsadfsas
                                    </div>

                                    <div className="large-4 columns">

                                    </div>
                                    <div className="large-4 columns">
                                        <h2>Aqui Signo Info</h2>
                                    </div>


                                </div>
                                <div className="large-6 medium-6 columns" style={borderStyle}>
                                    <Button circular color='facebook' icon='facebook' />
                                    <Button circular color='twitter' icon='twitter' />
                                    <Button circular color='linkedin' icon='linkedin' />
                                    <Button circular color='google plus' icon='google plus' />
                                </div>
                            </div>
                        </div>
                    </div>
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
                </header>
            </div>
        )
    }
})


export default Headers