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
import ServiceDescription from './Services/ServicesDescription';
import './Styles/Services.css';

class Services extends React.Component{
    constructor(props){
        super(props);
        this.state = {activeServiceIndex: 0};
        this.setActiveService = this.setActiveService.bind(this);
    }

    componentDidMount(){
        this.setState({activeServiceIndex: 0});
    }

    setActiveService(index){
        this.setState({activeServiceIndex: index});
    }

    render(){
        return (
            <section className="container-fluid p-1 p-xl-5 pt-1 pb-5" id="services">
                <div className="row py-4">
                    <div className="col">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 col-xl-3">
                        <ul className="service-tabs px-0">
                            {
                                this.props.services.map((e,i)=>{
                                    return (
                                        <li key={e.title}><button style={(i===this.state.activeServiceIndex)?{backgroundColor: "black", color:"white", textDecoration:"underline"}:{}} onClick={(event)=>{this.setActiveService(i)}}>{e.title}</button></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div style={{textAlign:'justify'}} className="col-12 col-md-6 col-xl-9 px-4 px-md-3 p-md-1">
                        <ServiceDescription serviceDetails={this.props.services[this.state.activeServiceIndex]} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;