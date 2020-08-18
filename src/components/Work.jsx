import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TransitSafetyImg from '../images/illustrations/transit-safety.svg';
import HabitImg from '../images/illustrations/habit.svg';
import AccessibleSodaMachineImg from '../images/illustrations/accessible-soda-machine.svg';
import PathwaysToHousing from '../images/illustrations/pathways-to-housing.svg';
import StepUpImg from '../images/illustrations/stepup.svg';
import TiltImg from '../images/illustrations/music.svg';
import ListAcrossImg from '../images/illustrations/listacross.svg';
import ColorPickerImg from '../images/illustrations/colors.svg';
import KarishmaWebsiteImg from '../images/illustrations/karishma-website.svg';
import AvisitechImg from '../images/illustrations/avisitech.svg';
import SupahandsWebsiteImg from '../images/illustrations/supahands-website.svg';
import AgentsWebsiteImg from '../images/illustrations/website-general.svg';

export default class Work extends Component {
  componentDidMount() {
    document.title = "Work | Chinmay Joshi";
  }

  workPageMetaData() {
    return([
      {
        projectName: "Thesis - Public Transit Safety", slug: "/public-transit-safety", imgSource: TransitSafetyImg, description: "A murder happens every 30 minutes. A rape happens every 4 minutes. A robbery happens every 1.7 minutes. This is stressful. What can a UX designer do to reduce crime rate?", links: [{linkName: "case study", linkUrl: "/work/public-transit-safety"}],
      },
      {
        projectName: "Habit - A Habit forming app", slug: "/habit", imgSource: HabitImg, description: "The Habit app helps anyone form long-lasting habits. App's AI follows routine of the person and recommends times to form habits.", links: [{linkName: "case study", linkUrl: "/work/habit"}, {linkName: "Design", linkUrl: "https://www.figma.com/proto/xTFa6T5Txczw2Hy9AytN3z/Habit?node-id=42%3A0&scaling=scale-down", external: true}],
      },
      {
        projectName: "Making of Accessible Soda Machine", slug: "/accessible-soda-machine", imgSource: AccessibleSodaMachineImg, description: "Accessible soda machine helps blind person to vend soda without hesitation and anyone's help.", links: [{linkName: "case study", linkUrl: "/work/accessible-soda-machine"}, {linkName: "Design", linkUrl: "https://www.figma.com/proto/l12E4OBN026f0Ce1pjnzUW/Soda-Machine-Interface?node-id=1%3A2&scaling=min-zoom", external: true}],
      },
      {
        projectName: "Pathways To Housing - Website Redesign", slug: "/pathways-to-housing", imgSource: PathwaysToHousing, description: "Pathways To Housing is an NGO helping homeless people to gain basic human rights. We proposed a viable and usable website solution as a case study.", links: [{linkName: "case study", linkUrl: "/work/pathways-to-housing"}],
      },
      {
        projectName: "Step Up - A Fitness App", slug: "/step-up", imgSource: StepUpImg, description: "Step up and take your steps to being fit with this reward-based app.", links: [{linkName: "case study", linkUrl: "/work/step-up"}, {linkName: "Design", linkUrl: "https://xd.adobe.com/view/6f6a4222-3c55-432f-4b7e-31dbc42c7541-195b/", external: true}],
      },
      {
        projectName: "TILT - Today I Listened To", slug: "/tilt", imgSource: TiltImg, description: "Today I listened to - Sing, listen, share, connect!", links: [{linkName: "case study", linkUrl: "/work/tilt"}],
      },
      {
        projectName: "ListAcross Web App", slug: "/", imgSource: ListAcrossImg, description: "ListAcross is on a mission to integrate online marketplaces (Facebook, LetGo, Craigslist, etc.) into one platform.", links: [{linkName: "Website", linkUrl: "https://www.listacross.com/", external: true}],
      },
      {
        projectName: "Avisi Technologies", slug: "/", imgSource: AvisitechImg, description: "Avisi Technologies is creating a next generation aqueous shunt to treat glaucoma. I helped them create a website to showcase their product, advisory board, and press release.", links: [{linkName: "Website", linkUrl: "https://www.avisitech.com/", external: true}],
      },
      {
        projectName: "Supahand's Website", slug: "/", imgSource: SupahandsWebsiteImg, description: "Supahands is a company I worked at for a year. I designed their website using React.", links: [{linkName: "Website", linkUrl: "https://www.supahands.com/", external: true}],
      },
      {
        projectName: "Supaagents Website", slug: "/", imgSource: AgentsWebsiteImg, description: "The workforce behind Supahands. Supaagents is a community of remote workers or freelancers across the globe.", links: [{linkName: "Website", linkUrl: "https://www.supaagents.com/", external: true}],
      },
      {
        projectName: "Website of a Landscape Designer", slug: "/karishma-joshi-website", imgSource: KarishmaWebsiteImg, description: "A showcase of work for my Architect friend and more than that my first ever web design as a UX Designer! Whoop!!", links: [{linkName: "case study", linkUrl: "/work/karishma-joshi-website"}, {linkName: "Website", linkUrl: "http://karishma-joshi.com/", external: true}],
      },
      {
        projectName: "Random Color Picker", slug: "/randomcolorpicker", imgSource: ColorPickerImg, description: "What if you could create random colors on the go. Believe me, it's fun! Why don’t you check it out?", links: [{linkName: "case study", linkUrl: "/work/randomcolorpicker"}, {linkName: "Website", linkUrl: "http://randomcolorpicker.xyz/", external: true}],
      }
    ]);
  }

  getLinks(metaData) {
    let links = [];

    for (let i = 0; i < metaData.length; i++) {
      if(metaData[i].external) {
        links.push(
          <a key={Math.random()} href={metaData[i].linkUrl} className="footer-button font-weight-bold" target="_blank" rel="noopener noreferrer">
            {metaData[i].linkName} <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
          </a>
        )
      } else {
        links.push(
          <a key={Math.random()} href={metaData[i].linkUrl} className="footer-button font-weight-bold">
            {metaData[i].linkName}
          </a>
        )
      }
    }

    return(links);
  }

  render() {
    let cards = [];
    const cardData = this.workPageMetaData();

    for (let i = 0; i < cardData.length; i++) {
      cards.push(
        <div key={i} className="col-md-4 mb-2 p-4" onClick={() => this.props.history.push("/work" + cardData[i].slug) } >
          <div className="card h-100">
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
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={window.location.pathname.split('/')[1] || '/'} classNames="fade" timeout={{ enter: 10000, exit: 10000 }} appear>
          <div className="main-page-container">
            <div className="blob">
              <svg xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
              </svg>
            </div>

            <div className="row">
              <div className="offset-lg-1 col-sm-12 col-lg-10 mb-5">
                <div className="row">
                  {cards}
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
