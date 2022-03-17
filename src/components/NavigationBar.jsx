/*
    Copyright 2022 Rahul Gautham Putcha

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

    4. Donot remove the backlinks to commercial website of SAI HVAC present within the index.html document.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
import React from 'react';
import './Styles/NavigationBar.css';
import $ from 'jquery';
import logo from '../logo.png';
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.scrollToElement = this.scrollToElement.bind(this);
    }
    componentDidMount(){
        $("nav li>a").on('click',()=>{
            $('nav').removeClass('open');
        })
    }
    scrollToElement(index){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(index).position().top-150
        }, 500)
    }

    render(){
        return (
            <nav className='container-fluid'>
                <div className="font-responsive row p-1 text-center bg-warning text-dark">
                    <div className="col">
                        <small><strong>Covid-19</strong>: We continue to follow the proper precautions and safety requirements from CDC to protect our customers and staff. </small>
                    </div>
                </div>
                <div className="font-responsive row p-0 px-3 text-dark">
                    <div className="offset-md-0 offset-md-6 col-12 col-md-6 p-1 text-right">
                        <small style={{float:"right"}}>Contact No: {this.props.contacts.phone}</small>
                    </div>
                </div>
                <div className='row p-0 pb-2 px-1 pb-lg-3 px-lg-3 navbar'>
                    <div className='col-8 col-md-3 col-xl-4 ps-3'>
                        <span className="nav-brand px-2">
                            <img src={logo} alt="SaiHVAC Logo" />
                        </span> <h1>SaiHVAC</h1>
                        
                    </div>
                    <div className='col-4 col-md-2 display-md-block text-center p-lg-0'>
                        <button className="nav-toggle" onClick={(e)=>{$('nav').toggleClass('open')}}><i class="fas fa-bars"></i></button>
                    </div>
                    <div className='col-md-9 col-lg-8 navlinks display-md-none'>
                        <ul className="nav-links">
                            {
                                this.props.navLinks?
                                this.props.navLinks.home.map((e)=>{
                                    return <li key={e.name}> <a href="/" onClick={(event)=>{event.preventDefault(); if(e.isExternalLink!==true)this.scrollToElement(e.link)}} >{e.name}</a> </li>
                                }):""
                            }
                            <li><a className="nav-booknow-btn" onClick={(event)=>{event.preventDefault(); this.scrollToElement("#book")}} href={"#book"}>Book Now</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;