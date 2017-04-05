import './styles/app.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,HashRouter,Switch} from 'react-router-dom'
import NoScript from 'react-noscript';
import Header from './app/components/Header'

import Home from './app/routes/home'
import Services from './app/routes/services'
import Nosotros from './app/routes/nosotros'
import Contact from './app/routes/contact'
import $ from 'jquery'


const Error404=React.createClass({
    render(){
        return(
            <div> Error 404 Content</div>
        )
    }
})

ReactDOM.render(
   <HashRouter hashType="noslash">
       <div>
           <Header/>
           <div>
               <Switch>
                   <Route exact path="/" component={Home}></Route>
                   <Route path="/servicios" component={Services}></Route>
                   <Route path="/nosotros" component={Nosotros}></Route>
                   <Route path="/contact" component={Contact}></Route>
                   <Route component={Error404}></Route>
               </Switch>

           </div>

       </div>
   </HashRouter>
    ,
    document.getElementById('root')
);

ReactDOM.render(
    <NoScript>
        <div style={{padding: '20px', backgroudColor: 'orange', width: '100%'}}>
            <p>Bienvenido a Mi Sitio</p>
            <h5>La página que estás viendo requiere para su funcionamiento el uso de JavaScript.
                Si lo has deshabilitado intencionadamente, por favor vuelve a activarlo.</h5>
        </div>
    </NoScript>,
    document.getElementById('Noscript')
)