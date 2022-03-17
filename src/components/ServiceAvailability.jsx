/*
    Copyright 2022 Rahul Gautham Putcha

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

    4. Donot remove the backlinks to commercial website of SAI HVAC present within the index.html document.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
import React, {Fragment} from 'react';
import './Styles/ServiceAvailability.css';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, Circle} from 'react-google-maps';

// Exporting Class: Service Availability
class ServiceAvailability extends React.Component{
    constructor(props){
        super(props)
        this.state = {mapLoaded: false};
        this.getMap = this.getMap.bind(this);
    }

    getMap(){
        const GMap = withScriptjs(withGoogleMap(
            ()=>{
                return (
                    <GoogleMap
                        defaultZoom={10.5}
                        defaultCenter={this.props.baseLocation.latLong}
                    >
                        <Fragment>
                            <Marker
                                position={this.props.baseLocation.latLong} />

                            <Circle
                                defaultCenter={this.props.baseLocation.latLong}
                                radius={this.props.baseLocation.radius}
                                options={{
                                    strokeColor: "#55F",
                                    strokeWeight: "3"
                                }} />
                        </Fragment>
                    </GoogleMap>
                );
            }
        ));

        return (<GMap googleMapURL={
                `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_SAI_HVAC_MAP_KEY}`
            }
            loadingElement={<div style={{height: "100%"}} />}
            containerElement={<div style={{height: "100%"}} />}
            mapElement={<div style={{height: "100%"}} />}
        />);
    }

    componentDidMount(){
        this.setState({mapObj: this.getMap(), mapLoaded: true});
    }
    
    render(){
        return (
            <section className="container-fluid p-1 p-md-3 p-lg-5 pt-5" id="availability">
                <div className="row pt-0 pb-3">
                    <div className="col">
                        <h2>Service Availability</h2>
                    </div>
                </div>
                <div className="row px-2 px-md-5 p-lg-1 pt-3 ps-3">
                    <div className="col-12 col-lg availability-map">
                        {
                            this.state.mapLoaded?
                                this.state.mapObj
                            :""
                        }
                    </div>
                    <div className="col-12 col-lg pt-2 pt-lg-5">
                        <div className="row pt-5">
                            <div className="col p-2">
                                <h3>{this.props.availability.title}</h3>
                            </div>
                        </div>
                        <ul className="row places">
                            {
                                this.props.availability.regions.map(e=>{
                                    return <li key={e} className="col-6 col-lg-4">{e}</li>;
                                })
                            }
                        </ul>
                        <div className="row">
                            <div className="col">
                                <div className="row pt-3">
                                    <div className="col">
                                        <p style={{fontWeight: "bold"}}>Did not find your region? You can always contact us to find out if our service is available to your region.</p>
                                    </div>
                                </div>
                                <ul className="col-12">
                                    <div className="row">
                                        <li className="col-12 col-lg-6 text-center"><i className="fas fa-phone"></i> Call us at <strong>{this.props.contacts.phone}</strong></li>
                                        <li className="col-12 col-lg-6 text-center"><i className="fas fa-envelope"></i> Ask any Questions by mainling at <strong>{this.props.contacts.email}</strong></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceAvailability;

/*
<this.props.WrappedMap googleMapURL={
                            'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDxpVLY9Io7gpe_DikoX8Ni1B8ebNo2U9o'
                        }
                            loadingElement={<div style={{height: "100%"}} />}
                            containerElement={<div style={{height: "100%"}} />}
                            mapElement={<div style={{height: "100%"}} />}>
                                {(place => {
                                    return (
                                        
                                    );
                                })()}
                        </this.props.WrappedMap>

*/