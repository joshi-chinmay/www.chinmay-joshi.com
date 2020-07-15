import React, {Component} from 'react';

import SocialMediaIcons from './util/SocialMediaIcons.jsx';
import StepUpImg from '../images/illustrations/stepup.svg';
import TiltImg from '../images/illustrations/music.svg';
import KarishmaWebsiteImg from '../images/illustrations/karishma-website.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  helloWorld() {
    const hello = ["Hello", "नमस्कार", "Hallo", "Bonjour", "Hola", "Ciao", "Guten Tag", "Hallo, Hi", "Olá", "Kon'nichiwa", "xin chào"];
    return(
      hello[ Math.floor(Math.random(10) * hello.length) ]
    );
  }

  workPageMetaData() {
    return([
      {
        projectName: "Step Up", imgSource: StepUpImg, description: "Step up and take your steps to being fit with this reward-based app.", links: [{linkName: "View", linkUrl: "/work/step-up"},{linkName: "Prototpye", linkUrl: "https://xd.adobe.com/view/6f6a4222-3c55-432f-4b7e-31dbc42c7541-195b/", external: true}],
      },
      {
        projectName: "TILT", imgSource: TiltImg, description: "Today I listened to - Sing, listen, share, connect!", links: [{linkName: "View", linkUrl: "/work/tilt"}],
      },
      {
        projectName: "Website of a Landscape Architect", imgSource: KarishmaWebsiteImg, description: "A showcase of work for my Architect friend and more than that my first ever web design as a UX Designer! Whoop!!", links: [{linkName: "View", linkUrl: "/work/karishma-joshi-website"}, {linkName: "live", linkUrl: "http://karishma-joshi.com/", external: true}],
      }
    ]);
  }

  getLinks(metaData) {
    let links = [];

    for (let i = 0; i < metaData.length; i++) {
      if(metaData[i].external) {
        links.push(
          <a key={i} href={metaData[i].linkUrl} className="font-weight-bold mr-4" target="_blank" rel="noopener noreferrer">
            {metaData[i].linkName} <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
          </a>
        )
      } else {
        links.push(
          <a key={i} href={metaData[i].linkUrl} className="font-weight-bold mr-4">
            {metaData[i].linkName}
          </a>
        )
      }
    }

    return(links);
  }

  render() {
    let workCards = [];
    const cardData = this.workPageMetaData();
    const sayHello = this.helloWorld();

    for (let i = 0; i < cardData.length; i++) {
      workCards.push(
        <div key={i} className="col-sm-12 col-md-6 col-lg-4 p-4">
          <div className="card h-100">
            <img src={cardData[i].imgSource} className="card-img-top" alt="work page showcase" />

            <div className="card-header font-weight-bold">
              {cardData[i].projectName}
            </div>

            <div className="card-body">
              {cardData[i].description}
            </div>

            <div className="card-footer">
              {this.getLinks(cardData[i].links)}
            </div>
          </div>
        </div>
      );
    }

    return(
      <div className="page-container">
        <div className="blob">
          <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
        </div>

        <section className="home-page-blob-container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="lead-slg">
                {sayHello}! <br />I am Chinmay Joshi.
              </h1>
              <h5 className="lead pt-2 pr-2 font-weight">
                UX Designer & Frontend Engineer
              </h5>
              <p className="mt-2">
                I design memorable, viable, usable and scalable experience by amalgamating <br />principles of user experience design, cognitive psychology and interaction design.
              </p>

              <div className="mt-5">
                <SocialMediaIcons />
              </div>
            </div>
          </div>
        </section>

        <section className="home-work-page-container">
          <div className="row">
            <div className="offset-lg-2 col-sm-12 col-lg-8">
              <div className="row mb-5">
                {workCards}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="offset-lg-4 col-sm-12 col-lg-4">
              <a href="/work" type="button" className="btn btn-warning d-block">
                View My Work
              </a>
            </div>
          </div>
        </section>

        <section className="footer-attribution-container text-center">
          <small>
            &copy; 2020 · Chinmay Joshi · All rights reserved.
            |
            Illustrations · created by <a href=""><u>Katerina Limpitsouni</u></a> on <u>undraw.co</u>.
          </small>
        </section>
      </div>
    );
  }
}
