import React from 'react';

import WorkCard from './work-card';

import StepUpImg from '../../../images/work/StepUp/Artboard.png';
import AccessibleSodaMachineImg from '../../../images/work/soda-machine/Final-Proto.png';
import HabitImg from '../../../images/work/habit/Artboard.png';
import TransitSafetyImg from '../../../images/work/transit-safety/transit-safety.svg';
import PathwaysToHousingImg from '../../../images/work/pathways-to-housing/pathways-to-housing.svg';

import "./styles.scss"

function Work() {
  const workPageMetaData = () => {
    const cardData = [
      {
        projectName: "Transity", slug: "/public-transit-safety", tags: ["UX Research", "Quantitative Research", "User Interviews"], imgSource: TransitSafetyImg, description: "This thesis case study will focus on creating awareness & providing critical and analytical insights on how people can make individual decisions while using public transportation."
      },
      {
        projectName: "Step Up - A Fitness App", slug: "/step-up", tags: ["Research", "UX Design", "Visual Design", "Prototyping"], imgSource: StepUpImg, description: "Step up is a reward-based app that helps you take extra steps per day. Solution is tailored for Jefferson University's students."
      },
      {
        projectName: "Accessible Soda Machine", slug: "/accessible-soda-machine", tags: ["Accessible Design", "User Research", "UX Design", "Product Design"], imgSource: AccessibleSodaMachineImg, description: "Accessible soda machine helps a blind person to vend soda without hesitation and anyone's help."
      },
      {
        projectName: "Habit - A Habit forming app", slug: "/habit", tags: ["User Research", "Product Design", "Visual Design", "Rapid Prototyping"], imgSource: HabitImg, description: "Habit app helps anyone in forming long-lasting habits. App's AI follows routine of the person and recommends times to form habits."
      },
      {
        projectName: "Pathways To Housing - A website Redesign", slug: "/pathways-to-housing", tags: ["Website Redesign", "Information Architecture", "UX Design"], imgSource: PathwaysToHousingImg, description: "This project is part of academic group study. This case study is done to improve information architecture of the existing website."
      }
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
      {workPageMetaData()}
    </div>
  );
}

export default Work;