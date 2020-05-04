import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import ClearCache from "react-clear-cache"


export default class Success extends Component {
    constructor(props){
        let token = localStorage.getItem("tokenG")
        super(props)
        this.state = {
             token 
        };
        
    }
    render() {
        return (
            <div className='backgnd'>              
                <h2 style={{textAlign: 'center'}}>You have successfully submitted your details </h2>
                <br/>
                <img className='suc' src={require('../styles/nutmeg.gif')} alt=" " />
                <br/> <br/><br/>
                <h2 style={{textAlign: 'center'}}>Your application will be processed</h2> 
                {/*  <Link className='' to="/"><h3>Next User</h3></Link>
                    Careful if already submitted... <br/> <br/>
                    Clicking this will lead to repeating the procedures */}
                 <Link to="/logout">Log Out</Link>
            </div>
        )
    }
}