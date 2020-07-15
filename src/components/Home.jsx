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
        <section className="home-page-blob-container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="lead-slg">
                {sayHello}! <br />I am Chinmay Joshi.
              </h1>
              <h5 className="lead-lg pt-2 pr-2">
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
            Illustrations · created by <u>Katerina Limpitsouni</u> on <u>undraw.co</u>.
          </small>
        </section>
      </div>
    );
  }
}
