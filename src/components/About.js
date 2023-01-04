import React, { Component } from 'react';

import Travel00 from "../images/gallery/img0.jpg"
import Travel01 from "../images/gallery/img1.jpg"
import Travel02 from "../images/gallery/img2.jpg"
import Travel03 from "../images/gallery/img3.jpg"
import Travel04 from "../images/gallery/img4.jpg"
import Travel05 from "../images/gallery/img5.jpg"
import Travel06 from "../images/gallery/img6.jpg"
import Travel07 from "../images/gallery/img7.jpg"
import Travel08 from "../images/gallery/img8.jpg"

export default class About extends Component {
  render() {
    return (
      <div className="row about-section">
        <div className="col-12">
          <h1>
            Hi, I am Chinmay Joshi —
          </h1>
          
          <p className="pt-4">
            I am a product designer based in Austin, TX. I am a logical thinker and strive to create impactful and usable interactions. On most productive days, I spend time talking to stakeholders, designing user journeys, and enjoying the nitty-gritty of visual design. I am most passionate about putting creating accessible interfaces and least passionate about making assumptions.
          </p>

          <p className="pt-4">
            On weekends, you will find me exploring the beauty and vastness of nature. I never thought Texas could offer so much rolling country side that I could explore on my Bonneville T100.
          </p>
        </div>

        <div className="col-12 mt-4">
          <div className="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img src={Travel04} class="img-fluid py-4" alt="about page - travel" />
              <img src={Travel05} class="img-fluid py-4" alt="about page - travel" />
              <img src={Travel06} class="img-fluid py-4" alt="about page - travel" />
            </div>
            
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img src={Travel07} class="img-fluid py-4" alt="about page - travel" />
              <img src={Travel08} class="img-fluid py-4" alt="about page - travel" />
              <img src={Travel03} class="img-fluid py-4" alt="about page - travel" />
            </div>

            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img src={Travel02} class="img-fluid py-4" alt="about page - travel" />
              <img src={Travel01} class="img-fluid py-4" alt="about page - travel" />
              <img src={Travel00} class="img-fluid py-4" alt="about page - travel" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
