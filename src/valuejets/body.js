import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Tabs from './tabs';
import './style.css';
import logo from '../valuejets/Logo.png';

export class Body extends Component {
    render() {
        return (
            <div className="">
                <div className="header-wrapper">
                    <div className="header">
                        <div className=""><img src={logo} alt="not seen" /></div>
                        <div className="list">
                            <ul>
                                <li><NavLink to='/' className="navbar">Home</NavLink></li>
                                <li><NavLink to='/hotel'  className="navbar">Hotels</NavLink></li>
                                <li><NavLink to='/Charter' className="navbar">Charter</NavLink></li>
                                <li><NavLink to='/about' className="navbar">About</NavLink></li>
                            </ul>
                        </div>
                        <div className="sign-in">
                            Sign in
                        </div>
                    </div>
                </div>
                <div className=" body">
                    <h2>You Believe. We Fly</h2>
                    <p>Find the best deals on flights right here.</p>
                <Tabs/>

                </div>
            </div>
        )
    }
}

export default Body
