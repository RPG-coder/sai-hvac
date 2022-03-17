/*
    Copyright 2022 Rahul Gautham Putcha

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

    4. Donot remove the backlinks to commercial website of SAI HVAC present within the index.html document.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from "react";
import './Styles/Booking.css';
import axios from 'axios';
import $ from 'jquery';
class Booking extends React.Component{
    constructor(props){
        super(props);
        this.sendBooking = this.sendBooking.bind(this);
    }

    async sendBooking(e){
        const response = await (axios.post(this.props.bookAPI,{
            name: e.target.customer_name.value,
            email: e.target.customer_email.value,
            contact: e.target.customer_phone.value,
            description: e.target.customer_description.value
        }));
        if(response.data.success===1){
            $('#book-info').text("Your Booking is successful. Our Customer care personell will be getting in touch with you soon. Thank you for reaching us out.");
            $('#book-info').removeClass();
            $('#book-info').addClass('text-success');
        }else{
            $('#book-info').text("We are facing a technical issue in sending your booking details. Please check if you are connected to the internet and/or try again later...");
            $('#book-info').removeClass();
            $('#book-info').addClass('text-danger');
        }

        $('form')[0].reset().reset();
    }
    render(){
        return (
            <div id="book" className="container-fluid p-0  pt-3 p-lg-5">
                <div className="row text-center">
                    <h2>Contact us</h2>
                    <p className="p-lg-4 pb-1">Want to know more about your next HVAC setting? We can show it live in action. All you have to do is reach us out and we will be supporting you from there on.</p>
                </div>
                <div className="row">
                    <div className="form-region col-12 col-lg">
                        <form className="row p-0 py-5 p-lg-5" method="post" onSubmit={(e)=>{e.preventDefault(e); this.sendBooking(e)}}>
                            <div className="form-container col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Book your Appointment</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 py-2">
                                        <label htmlFor="customer_name">Name*</label>
                                        <input id="customer_name" name="customer_name" type="text" placeholder="Your Name..." required/>
                                    </div>
                                    <div className="col-12 py-2">
                                        <label htmlFor="customer_phone">Contact No.*</label>
                                        <input id="customer_phone" name="customer_phone" type="text" placeholder="Your Phone Number..." required/>
                                    </div>
                                    <div className="col-12 py-2">
                                        <label htmlFor="customer_email">Email*</label>
                                        <input id="customer_email" name="customer_email" type="text" placeholder="Your Email..." required />
                                    </div>
                                    <div className="col-12 py-2">
                                        <label htmlFor="customer_description">What can we help you with?</label>
                                        <textarea rows="10" cols="33" id="customer_description" name="customer_description" type="text" placeholder="Your Question?" />
                                    </div>
                                    <div className="col-12 pt-4 py-2 text-center">
                                        <button className="submit-btn" type="submit">Send</button>
                                    </div>
                                    <div>
                                        <p>
                                            <small id="book-info">
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 pb-5 pb-lg-0 col-lg pt-1 pt-lg-5">
                        <div className="row pb-5 pb-lg-0 pt-1 pt-lg-5">
                            <div className="col">
                                <div className="row pt-lg-5">
                                    <div className="col text-center">
                                        <span className="h1">OR</span><br/>
                                        <p>You can reach us out using the following mediums,</p>
                                    </div>
                                </div>
                                <ul className="row text-left px-auto pt-1 py-lg-5 px-auto h4">
                                    <li className="col font-responsive">
                                        <div className="row ">
                                            <div className="offset-xs-1 offset-sm-2 offset-lg-0 col-3 col-lg-2 col-xl-4 text-center"><i className="fas fa-phone"></i></div>
                                            <div className="col text-center-md text-left">Call at <strong>{this.props.contacts.phone}</strong></div>
                                        </div>
                                    </li>
                                    <li className="font-responsive">
                                        <div className="row">
                                            <div className="offset-xs-1 offset-sm-2 offset-lg-0 col-3 col-lg-2 col-xl-4 text-center"><i className="fas fa-envelope"></i></div>
                                            <div className="col text-center-md text-left">Mail to <a href={"mailto:"+this.props.contacts.email}><strong>{this.props.contacts.email}</strong></a></div>
                                        </div>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/* Blankspace beside booking form (Right-hand side) */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Booking;