/*
    Copyright 2022 Rahul Gautham Putcha

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

    4. Donot remove the backlinks to commercial website of SAI HVAC present within the index.html document.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
import './App.css';
import React from 'react';
import content from './content';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Services from './components/Services';
import ServiceAvailability from './components/ServiceAvailability';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

// Main App class
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {contentFetched: false};
  }

  componentDidMount(){
    this.setState({content: content, contentFetched: true});
  }

  render(){
    if(this.state.contentFetched){
      return (
        <div className="App">
          <NavigationBar navLinks={this.state.content.navigationLinks} contacts={this.state.content.contacts}/>
          <Header slideData={this.state.content.slides} />
          <Services services={this.state.content.services} />
          <ServiceAvailability availability={this.state.content.availability} baseLocation={this.state.content.baseLocation} contacts={this.state.content.contacts}/>
          <Testimonial/>
          <Booking bookAPI={this.state.content.bookingAPILink} contacts={this.state.content.contacts} />
          <Footer />
        </div>
      );
    }else{
      return (
        <div className="App">
          Loading...
        </div>
      );
    }
  }
}

export default App;
