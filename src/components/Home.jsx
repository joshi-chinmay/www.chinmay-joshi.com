import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SocialMediaIcons from './util/SocialMediaIcons.jsx';

import TransitSafetyImg from '../images/illustrations/transit-safety.svg';
import StepUpImg from '../images/illustrations/stepup.svg';
import AccessibleSodaMachineImg from '../images/illustrations/accessible-soda-machine.svg';
import HabitImg from '../images/illustrations/habit.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helloWord: this.helloWorld(),
    }
  }

  helloWorld() {
    const hello = ["Hello", "नमस्कार", "Hallo", "Bonjour", "Hola", "Ciao", "Guten Tag", "Hallo, Hi", "Olá", "Kon'nichiwa", "xin chào"]
    return(
      hello[ Math.floor(Math.random(10) * hello.length) ]
    );
  }

  workPageMetaData() {
    return([
      {
        projectName: "Thesis - Public Transit Safety", slug: "/public-transit-safety", projectType: "academic", imgSource: TransitSafetyImg, description: "A murder happens every 30 minutes. A rape happens every 4 minutes. A robbery happens every 1.7 minutes. This is stressful. What can a UX designer do to reduce crime rate?", links: [{linkName: "case study", linkUrl: "/work/public-transit-safety"}]
      },
      {
        projectName: "Step Up - A Fitness App", slug: "/step-up", imgSource: StepUpImg, description: "Step up and take your steps to being fit with this reward-based app.", links: [{linkName: "case study", linkUrl: "/work/step-up"}],
      },
      {
        projectName: "Making of Accessible Soda Machine", slug: "/accessible-soda-machine", imgSource: AccessibleSodaMachineImg, description: "Accessible soda machine helps blind person to vend soda without hesitation and anyone's help.", links: [{linkName: "case study", linkUrl: "/work/accessible-soda-machine"}]
      },
      {
        projectName: "Habit - A Habit forming app", slug: "/habit", imgSource: HabitImg, description: "The Habit app helps anyone form long-lasting habits. App's AI follows routine of the person and recommends times to form habits.", links: [{linkName: "case study", linkUrl: "/work/habit"}]
      }
    ]);
  }

  getLinks(metaData) {
    let links = [];

    for (let i = 0; i < metaData.length; i++) {
      if(metaData[i].external) {
        links.push(
          <a key={i} href={metaData[i].linkUrl} className="font-weight-bold" target="_blank" rel="noopener noreferrer">
            {metaData[i].linkName} <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
          </a>
        )
      } else {
        links.push(
          <a key={i} href={metaData[i].linkUrl} className="font-weight-bold">
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

    for (let i = 0; i < cardData.length; i++) {
      workCards.push(
        <div key={i} className="col-lg-3 col-md-6 col-xs-12 mb-5 animate-on-load">
          <div className="card h-100" onClick={() => this.props.history.push("/work" + cardData[i].slug) } >
            <img src={cardData[i].imgSource} className="card-img-top" alt="work page showcase" />

            <div className="card-header font-weight-bold">
              {cardData[i].projectName}
            </div>

            <div className="card-body">
              {cardData[i].description}
            </div>

            <div className={"card-footer " + (cardData[i].links.length > 1 ? "multiple-links" : "single-link" )} >
              {this.getLinks(cardData[i].links)}
            </div>
          </div>
        </div>
      );
    }

    return(
      <TransitionGroup component="main">
        <CSSTransition classNames="fade" timeout={{ enter: 10000, exit: 10000 }} appear>
          <div className="page-container">
            <div className="blob">
              <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
              </svg>
            </div>

            <section className="home-page-welcome-note-container">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="lead-xlg">
                    {this.state.helloWord}! <br />I am Chinmay Joshi.
                  </h1>
                  <p className="lead pt-4 pr-2">
                    Software Engineer turned <b className="font-weight-bold">Product Designer</b>.
                    <br />Currently designing memorable, scalable experiences at <a href="https://www.listacross.com" className="text-capitalize" target="_blank" rel="noopener noreferrer">ListAcross</a>.
                  </p>

                  <div className="mt-5">
                    <SocialMediaIcons />
                  </div>
                </div>
              </div>
            </section>

            <section className="home-work-page-container">
              <div className="row">
                <div className="offset-lg-1 col-sm-12 col-lg-10">
                  <div className="row mb-5">
                    {workCards}
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="offset-lg-4 col-sm-12 col-lg-4">
                  <a href="/work" type="button" className="btn btn-default d-block">
                    View all of my work
                  </a>
                </div>
              </div>
            </section>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
