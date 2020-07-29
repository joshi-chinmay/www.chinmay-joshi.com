import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StepUpImg from '../images/illustrations/stepup.svg';
import TiltImg from '../images/illustrations/music.svg';
import ColorPickerImg from '../images/illustrations/colors.svg';
import KarishmaWebsiteImg from '../images/illustrations/karishma-website.svg';
import TaskConsoleImg from '../images/illustrations/console.svg';
import ImgAnnoImg from '../images/illustrations/image-anno.svg';
import SupahandsWebsiteImg from '../images/illustrations/supahands-website.svg';
import AgentsWebsiteImg from '../images/illustrations/website-general.svg';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workItems: this.workPageMetaData()
    }

    this.toggleWorkTabs = this.toggleWorkTabs.bind(this);
  }

  toggleWorkTabs(state) {

  }

  workPageMetaData() {
    return([
      {
        projectName: "Step Up", projectType: "academic", imgSource: StepUpImg, description: "Step up and take your steps to being fit with this reward-based app.", links: [{linkName: "View", linkUrl: "/work/step-up"}, {linkName: "Design", linkUrl: "https://xd.adobe.com/view/6f6a4222-3c55-432f-4b7e-31dbc42c7541-195b/", external: true}],
      },
      {
        projectName: "TILT", projectType: "personal", imgSource: TiltImg, description: "Today I listened to - Sing, listen, share, connect!", links: [{linkName: "View", linkUrl: "/work/tilt"}],
      },
      {
        projectName: "Random Color Picker", projectType: "personal", imgSource: ColorPickerImg, description: "What if you could create random colors on the go. Believe me, it's fun! Why don’t you check it out?", links: [{linkName: "View", linkUrl: "/work/randomcolorpicker"}, {linkName: "Website", linkUrl: "http://randomcolorpicker.xyz/", external: true}],
      },
      {
        projectName: "Website of a Landscape Architect", projectType: "professional", imgSource: KarishmaWebsiteImg, description: "A showcase of work for my Architect friend and more than that my first ever web design as a UX Designer! Whoop!!", links: [{linkName: "View", linkUrl: "/work/karishma-joshi-website"}, {linkName: "Website", linkUrl: "http://karishma-joshi.com/", external: true}],
      },
      {
        projectName: "Task Console", projectType: "professional", imgSource: TaskConsoleImg, description: "Task Console helps to Build and run microtasking projects with security, quality and efficiency automation features.", links: [{linkName: "Website", linkUrl: "https://www.supahands.com/task-console", external: true}],
      },
      {
        projectName: "Image Annotator", projectType: "professional", imgSource: ImgAnnoImg, description: "An application curating images by drawing and labeling bounding boxes, especially used by companies focused on autonomous vehicles.", links: [{linkName: "Website", linkUrl: "https://www.supahands.com/image-annotation", external: true}],
      },
      {
        projectName: "Supahand's Website", projectType: "professional", imgSource: SupahandsWebsiteImg, description: "Supahands is a company I worked at for a year. I designed their website using React.", links: [{linkName: "Website", linkUrl: "https://www.supahands.com/", external: true}],
      },
      {
        projectName: "Supaagents Website", projectType: "professional", imgSource: AgentsWebsiteImg, description: "The workforce behind Supahands. Supaagents is a community of remote workers or freelancers across the globe.", links: [{linkName: "Website", linkUrl: "https://www.supaagents.com/", external: true}],
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
        <div key={i} className="col-md-4 mb-2 p-4">
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
      <div className="main-page-container">
        <div className="row">
          <div className="col-md-12">
            <ul className="nav secondary-nav justify-content-center">
              <li className="nav-item px-3">
                <button className="btn btn-nav-link nav-link active">All</button>
              </li>
              <li className="nav-item mx-3">
                <button className="btn btn-nav-link nav-link">Academic</button>
              </li>
              <li className="nav-item mx-3">
                <button className="btn btn-nav-link nav-link">Professional</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="offset-lg-1 col-sm-12 col-lg-10 mb-5">
            <div className="row">
              {cards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
