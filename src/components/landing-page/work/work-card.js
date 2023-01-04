import React from 'react';

import Tags from '../../util/Tags';

function WorkCard(props) {
  const cardData = props.cardData;

  return(
    <div className="row landing-work-card">
      <div className="work-image col-sm-12 col-md-5 pl-0">
        <img src={cardData.imgSource} className="image-source" alt="landing page work art" />
      </div>
      <div className="col-sm-12 col-md-7 pl-5 pr-5">
        <h5 className="pt-5">
          {cardData.projectName}
        </h5>

        <p className="pt-2">
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