/*
    Copyright 2022 Rahul Gautham Putcha

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

    4. Donot remove the backlinks to commercial website of SAI HVAC present within the index.html document.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
import './Styles/Testimonial.css'
import Carousel from 'react-bootstrap/Carousel';

const Testimonial = (props)=>{
    return (
        <div id="testimonial" className="container-fluid p-1 p-lg-5 pt-3">
            <div className="row">
                <div className="col">
                    <h2>What do our past customers say?</h2>
                </div>
            </div>

            <div className="row p-3">
                <Carousel className="slides text-white">

                    <Carousel.Item className="slide-item" interval={5000}>
                        <Carousel.Caption className="slide-caption row w-100" style={{left:"10px"}}>
                            <div className="col-12 col-xxl-3 ps-5 customer">
                        
                                <div className="row">
                                    <div className="col-12">
                                        <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png" alt="Sai HVAC Customer" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-warning">
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col ps-4">
                                        <p>Rahul Gautham Putcha</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xxl-9 review">
                                <q><h3>Great Work</h3> </q>
                                <p style={{textAlign:"justify"}}>
                                    Great work Really liked the enthusiasm
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>


                    <Carousel.Item className="slide-item" interval={5000}>
                        <Carousel.Caption className="slide-caption row w-100" style={{left:"10px"}}>
                            <div className="col-12 col-xxl-3 ps-5 customer">
                        
                                <div className="row">
                                    <div className="col-12">
                                        <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-warning">
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col ps-4">
                                        <p>Rahul Gautham Putcha</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xxl-9 review">
                                <q><h3>Great Work</h3> </q>
                                <p style={{textAlign:"justify"}}>
                                    Great work Really liked the enthusiasm
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="slide-item" interval={5000}>
                        <Carousel.Caption className="slide-caption row w-100" style={{left:"10px"}}>
                            <div className="col-12 col-xxl-3 ps-5 customer">
                        
                                <div className="row">
                                    <div className="col-12">
                                        <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-warning">
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                        <i class="fas fa-star"></i> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col ps-4">
                                        <p>Rahul Gautham Putcha</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xxl-9 review">
                                <q><h3>Great Work</h3> </q>
                                <p style={{textAlign:"justify"}}>
                                    Great work Really liked the enthusiasm
                                </p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                
            </div>
        </div>
    );
}

export default Testimonial;