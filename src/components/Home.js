import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SocialMediaIcons from './util/SocialMediaIcons';

import StepUpImg from '../images/work/StepUp/Artboard.png';
import AccessibleSodaMachineImg from '../images/work/soda-machine/Final-Proto.png';
import HabitImg from '../images/work/habit/Artboard.png';
import TransitSafetyImg from '../images/illustrations/transit-safety.svg';

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
        projectName: "Step Up - A Fitness App", slug: "/step-up", klass: "bg-pastel-baby-pink", imgSource: StepUpImg, description: "Step up and take your steps to being fit with this reward-based app. Solution tailored for Jefferson University's students."
      },
      {
        projectName: "Accessible Soda Machine", slug: "/accessible-soda-machine", klass: "bg-pastel-yellow", imgSource: AccessibleSodaMachineImg, description: "Accessible soda machine helps blind person to vend soda without hesitation and anyone's help."
      },
      {
        projectName: "Habit - A Habit forming app", slug: "/habit", imgSource: HabitImg, klass: "bg-pastel-sky-blue", description: "The Habit app helps anyone form long-lasting habits. App's AI follows routine of the person and recommends times to form habits."
      },
      {
        projectName: "Thesis - Public Transit Safety", slug: "/public-transit-safety", klass: "bg-pastel-off-white padded-image-source", projectType: "academic", imgSource: TransitSafetyImg, description: "A murder happens every 30 minutes. A rape happens every 4 minutes. A robbery happens every 1.7 minutes. This is stressful. What can a UX designer do to reduce crime rate?"
      }
    ]);
  }

  render() {
    let workCards = [];
    const cardData = this.workPageMetaData();

    for (let i = 0; i < cardData.length; i++) {
      workCards.push(
        <div key={i} className="col-lg-12 col-md-12 col-xs-12">
          <div className={"row h-100 home-page-work-cards " + cardData[i].klass }>
            <div className={"col-xs-12 col-md-6 p-0 image-source " + (i % 2 !== 0 ? "" : "order-last" ) }>
              <img src={cardData[i].imgSource} className="img-fluid" alt="work page showcase" />
            </div>

            <div className={"col-xs-12 project-source col-md-6 " + (i % 2 !== 0 ? "" : "order-first" ) }>
              <h1 className="mt-5">
                {cardData[i].projectName}
              </h1>
              <p className="mt-4">
                {cardData[i].description}
              </p>
              <span className="d-block mt-2">
                Research | UX Design | Visual Design | Rapid Prototyping
              </span>
              <a href={"/work" + cardData[i].slug} className="project-link font-weight-bold d-block mt-5">
                View Case Study
              </a>
            </div>
          </div>
        </div>
      );
    }

    return(
      <TransitionGroup component="main">
        <CSSTransition classNames="fade" timeout={{ enter: 10000, exit: 10000 }} appear>
          <div className="page-container">
            <section className="home-page-welcome-note-container">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="lead-xlg text-default-gradient">
                    {this.state.helloWord}!
                  </h1>
                  <h1 className="lead-xlg text-gradient text-gradient-default">
                    I am Chinmay Joshi.
                  </h1>
                  <p className="lead pt-4 pr-2 text-gradient text-gradient-secondary">
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
                <div className="offset-lg-1 col-lg-10 col-sm-12">
                  <div className="row mb-5">
                    {workCards}
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="offset-lg-4 col-sm-12 col-lg-4">
                  <a href="/work" type="button" className="h3 font-weight-bold font-family-playfair text-capitalize d-block text-center">
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
