import React, { useState } from 'react';

import Tags from '../../util/Tags';

function WorkCard(props) {
  const [workCardHovered, setWorkCardHovered] = useState(false);
  const cardData = props.cardData;

  return(
    <div className="landing-work-card" onMouseEnter={() => setWorkCardHovered(true)} onMouseLeave={() => setWorkCardHovered(false)}>
      <img src={cardData.imgSource} className="image-source" alt="work page showcase" />

      <div className={"project-source " + (workCardHovered ? "d-block" : "d-none")}>
        <h5 className="pt-5">
          {cardData.projectName}
        </h5>

        <p className="pt-2 px-5">
          {cardData.description}
        </p>

        <div className="pt-4">
          <Tags tags={cardData.tags} />
        </div>

        <div className="pt-5">
          <a href={"/work" + cardData.slug}>
            Read Case Study ⟶
          </a>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;