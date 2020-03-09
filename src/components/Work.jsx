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

    this.redirectToTarget = this.redirectToTarget.bind(this);
  }

  redirectToTarget(target) {
    this.props.history.push(target);
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
        projectName: "Random Color Picker", imgSource: ColorPickerImg, description: "What if you could create random colors on the go. Believe me, it's fun! Why don’t you check it out?", links: [{linkName: "View", linkUrl: "/work/randomcolorpicker"}, {linkName: "live", linkUrl: "http://randomcolorpicker.xyz/", external: true}],
      },
      {
        projectName: "Website of a Landscape Architect", imgSource: KarishmaWebsiteImg, description: "A showcase of work for my Architect friend and more than that my first ever web design as a UX Designer! Whoop!!", links: [{linkName: "View", linkUrl: "/work/karishma-joshi-website"}, {linkName: "live", linkUrl: "http://karishma-joshi.com/", external: true}],
      },
      {
        projectName: "Task Console", imgSource: TaskConsoleImg, description: "Task Console helps to Build and run microtasking projects with security, quality and efficiency automation features.", links: [{linkName: "live", linkUrl: "https://www.supahands.com/task-console", external: true}],
      },
      {
        projectName: "Image Annotator", imgSource: ImgAnnoImg, description: "An application curating images by drawing and labeling bounding boxes, especially used by companies focused on autonomous vehicles.", links: [{linkName: "live", linkUrl: "https://www.supahands.com/image-annotation", external: true}],
      },
      {
        projectName: "Supahand's Website", imgSource: SupahandsWebsiteImg, description: "Supahands is a company I worked at for a year. I designed their website using React.", links: [{linkName: "live", linkUrl: "https://www.supahands.com/", external: true}],
      },
      {
        projectName: "Supaagents Website", imgSource: AgentsWebsiteImg, description: "The workforce behind Supahands. Supaagents is a community of remote workers or freelancers across the globe.", links: [{linkName: "live", linkUrl: "https://www.supaagents.com/", external: true}],
      }
    ]);
  }

  getLinks(metaData) {
    let links = [];

    for (let i = 0; i < metaData.length; i++) {
      if(metaData[i].external) {
        links.push(
          <a href={metaData[i].linkUrl} className="small mr-4" target="_blank" rel="noopener noreferrer">
            {metaData[i].linkName} <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
          </a>
        )
      } else {
        links.push(
          <a href={metaData[i].linkUrl} className="small mr-4">
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
        <div key={i} className="col-sm-12 col-md-6 col-lg-4 p-4">
          <div className="card h-100">
            <img src={cardData[i].imgSource} className="card-img-top" alt="work page showcase" />

            <div className="card-header">
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
      <div className="main-page-container">
        <div className="row">
          <div className="offset-lg-1 col-sm-12 col-lg-10">
            <div className="row mb-5 px-2">
              {cards}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
