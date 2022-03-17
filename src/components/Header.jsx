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
import Carousel from 'react-bootstrap/Carousel';
import './Styles/Header.css';
import $ from 'jquery';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.scrollToElement = this.scrollToElement.bind(this);
    }

    scrollToElement(index){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(index).position().top-150
        }, 500)
    }

    render(){
        return (
            <header id="home" className="bg-dark"> 
                <Carousel className="font-responsive slides text-white">

                    {
                        this.props.slideData.map((e)=>{
                            return (
                                <Carousel.Item className="slide-item" key={"slide-"+e.title} interval={5000}>
                                    <img
                                        className="d-block w-100"
                                        src={e.img}
                                        alt={e.title}
                                    />
                                    <Carousel.Caption className="slide-caption" style={(e.align==="left"||e.align==="right")?{textAlign:"left"}:({textAlign:"center"})}>
                                    <h2>{e.title}</h2>
                                    <p className='p-2'>{e.subtitle}</p>
                                    <div style={(e.align==="center"||e.align==="right")?{textAlign:"center"}:({textAlign:"left"})}>
                                        {(e.buttonSettings.isButtonPresent)?<a onClick={(event)=>{event.preventDefault(); this.scrollToElement(e.buttonSettings.link)}} href={e.buttonSettings.link}>{e.buttonSettings.text}</a>:""}
                                    </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            );
                        })
                    }

                </Carousel>
            </header>
        );
    }
}

export default Header;