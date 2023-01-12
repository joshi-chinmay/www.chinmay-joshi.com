import React from 'react';
import WorkCard from './work-card';

import NextivaAutomation from '../../../images/work/nextiva-automation/automation.png';
import NextivaSmartTopics from '../../../images/work/nextiva-smart-topics/topics.png';
import NextivaDesignSystem from '../../../images/work/nextiva-design-system/design-system.jpg';
import StepUpImg from '../../../images/work/StepUp/Artboard.png';
import TransitSafetyImg from '../../../images/work/transit-safety/transity.png';

// import Nextiva from '../../../images/work/nextiva/nextiva.png';
// import AccessibleSodaMachineImg from '../../../images/work/soda-machine/Final-Proto.png';
// import PathwaysToHousingImg from '../../../images/work/pathways-to-housing/pathways.jpeg';


import "./styles.scss"

function Work() {
  const workPageMetaData = () => {
    const cardData = [
      {
        projectName: "Nextiva - Automations", slug: "/nextiva-automation", tags: ["Product Design", "Usability Study", "Visual Design"], imgSource: NextivaAutomation, description: "Send automated welcome emails, messages, surveys, campaigns, and more to delight customers. Exclusive Quick Automation as a part of CX-Plugin.",
      },
      {
        projectName: "Nextiva - SmartTopics Redesign", slug: "/nextiva-topics", tags: ["Product Design", "Usability Study", "Heuristic Evaluation"], imgSource: NextivaSmartTopics, description: "Better understand customers by assigning topics on conversations. Sentiment analysis is combined with topic-level experience rating to predict next actions to ensure customer satisfaction.",
      },
      {
        projectName: "Nextiva - Sedona Design Systems", slug: "/nextiva-design-system", tags: ["Design system", "Accessibility", "Communication"], imgSource: NextivaDesignSystem, description: "Design vision for the unified-communication inbox. Design systems lead, owning end-to-end design processes, component development, WCAG 2.2 guidelines, retrospective activities, and cross-functional team collaborations.",
      },
      {
        projectName: "Transity", slug: "/public-transit-safety", tags: ["Research", "Product Design", "Visual Design"], imgSource: TransitSafetyImg, description: "This thesis case study will focus on creating awareness & providing critical and analytical insights on how people can make individual decisions while using public transportation."
      },
      {
        projectName: "Step Up - A Fitness App", slug: "/step-up", tags: ["Research", "UX Design", "Visual Design", "Prototyping"], imgSource: StepUpImg, description: "Step up is a reward-based app that helps you take extra steps per day. Solution is tailored for Jefferson University's students."
      },
      // {
      //   projectName: "Pathways To Housing - A website Redesign", slug: "/pathways-to-housing", tags: ["Website Redesign", "Information Architecture", "UX Design"], imgSource: PathwaysToHousingImg, description: "This project is part of academic group study. This case study is done to improve information architecture of the existing website."
      // },
      // {
      //   projectName: "Accessible Soda Machine", slug: "/accessible-soda-machine", tags: ["Accessible Design", "User Research", "UX Design", "Product Design"], imgSource: AccessibleSodaMachineImg, description: "Accessible soda machine helps a blind person to vend soda without hesitation and anyone's help."
      // },
    ];
    
    let workCards = [];
    for (let i = 0; i < cardData.length; i++) {
      workCards.push(
        <div key={i} className="col-md-12 col-lg-12">
          <WorkCard cardData={cardData[i]} />
        </div>
      );
    }

    return (workCards);
  };

  return (
    <div id="work" className="landing-work-container row">
      <div className="col-md-12 text-center">
        <h2>Explore work</h2>
        {/* <p>
          Professional case studies are available to view&nbsp;
          <a href="mailto:chinmayj93@gmail.com" target="_blank" rel="noopener noreferrer">upon request.</a>
        </p> */}
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