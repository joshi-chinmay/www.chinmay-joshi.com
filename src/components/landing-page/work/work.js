import React from 'react';
import WorkCard from './work-card';

import Nextiva from '../../../images/work/nextiva/nextiva.png';
import StepUpImg from '../../../images/work/StepUp/Artboard.png';
import AccessibleSodaMachineImg from '../../../images/work/soda-machine/Final-Proto.png';
import TransitSafetyImg from '../../../images/work/transit-safety/transity.png';
import PathwaysToHousingImg from '../../../images/work/pathways-to-housing/pathways.jpeg';

import "./styles.scss"

function Work() {
  const workPageMetaData = () => {
    const cardData = [
      {
        projectName: "Nextiva", slug: "/nextiva", tags: ["Product Design", "Usability Study", "Visual Design", "Design Systems"], imgSource: Nextiva, description: "Nextiva empowers businesses to manage their communications, productivity, and customer relationships on a truly unified platform.",
      },
      {
        projectName: "Transity", slug: "/public-transit-safety", tags: ["Research", "Product Design", "Visual Design"], imgSource: TransitSafetyImg, description: "This thesis case study will focus on creating awareness & providing critical and analytical insights on how people can make individual decisions while using public transportation."
      },
      {
        projectName: "Step Up - A Fitness App", slug: "/step-up", tags: ["Research", "UX Design", "Visual Design", "Prototyping"], imgSource: StepUpImg, description: "Step up is a reward-based app that helps you take extra steps per day. Solution is tailored for Jefferson University's students."
      },
      {
        projectName: "Pathways To Housing - A website Redesign", slug: "/pathways-to-housing", tags: ["Website Redesign", "Information Architecture", "UX Design"], imgSource: PathwaysToHousingImg, description: "This project is part of academic group study. This case study is done to improve information architecture of the existing website."
      },
      {
        projectName: "Accessible Soda Machine", slug: "/accessible-soda-machine", tags: ["Accessible Design", "User Research", "UX Design", "Product Design"], imgSource: AccessibleSodaMachineImg, description: "Accessible soda machine helps a blind person to vend soda without hesitation and anyone's help."
      },
    ];
    
    let workCards = [];
    for (let i = 0; i < cardData.length; i++) {
      workCards.push(
        <div key={i} className="col-xs-12 col-6">
          <WorkCard cardData={cardData[i]} />
        </div>
      );
    }

    return (workCards);
  };

  return (
    <div className="landing-work-container row">
      <div className="col-md-12 text-center">
        <h1>Explore work</h1>
        <p>
          Professional case studies are available to view&nbsp;
          <a href="mailto:chinmayj93@gmail.com" target="_blank" rel="noopener noreferrer">upon request.</a>
        </p>
      </div>

      <div className="mt-5 col-md-12">
        <div className="row">
          {workPageMetaData()}
        </div>
      </div>
    </div>
  );
}

export default Work;