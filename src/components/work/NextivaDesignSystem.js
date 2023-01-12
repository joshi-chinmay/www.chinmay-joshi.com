import React, { Component } from 'react';

import Password from '../util/Password';

import NextLink from '../util/NextLink';
import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextivaDesignSystemImg from '../../images/work/nextiva-design-system/design-system.jpg';
import NextivaDesignSystemChart from '../../images/work/nextiva-design-system/design-system-chart.png';

import NextivaDsElements from '../../images/work/nextiva-design-system/ds-elements.png';
import NextivaTableComponent from '../../images/work/nextiva-design-system/table-component.png';
import NextivaTableDocs from '../../images/work/nextiva-design-system/table-docs.png';

export default class NextivaDesignSystem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    }

    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount() {
    document.title = "Nextiva Design System | Chinmay Joshi";
  }

  authenticate() {
    this.setState({ isAuthenticated: true });
  }

  render() {
    if (!this.state.isAuthenticated) {
      return (<Password authenticate={this.authenticate} />);
    } else {
      return (
        <div className="work-page-container">
          <WorkTabLandingInfo
            pageHeading="Nextiva Design System"
            classList={"bg-pastel-baby-pink full-bleed"}
            pageDescription="Design vision for the unified-communication inbox. Design systems lead, owning end-to-end design processes, component development, WCAG 2.2 guidelines, retrospective activities, and cross-functional team collaborations."
            tags={["Design system", "Accessibility", "Communication"]}
            landingPageImage={NextivaDesignSystemImg}
            jumpToProto="#design"
          />

          <div className="work-page-presnetation">
            <div id="initial" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>My role</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  Currently, I am leading a team of three designers, two engineers dedicated to Nextiva's Design System, known as Sedona.
                  I own end-to-end planning, process execution, workload & prioritization for our Global Components, NextivaONE web components and Mobile Design library.
                </p>
              </div>
            </div>

            <div id="duration" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Duration</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  This is a ongoing project to maintain Nextiva's Design System and component library.
                </p>
              </div>
            </div>

            <hr />

            <div id="planning" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Planning</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  I hold a monthly retrospective activity to understand loopholes in our current design system. I take feedback from our users, designers, engineering partners, and other stakeholders to understand product vision better. This helps us define and prioritize goals for upcoming sprints.
                </p>

                <img src={NextivaDesignSystemChart} className="img-fluid img-thumbnail mt-4" alt="Design system planning phase" />
              </div>
            </div>

            <div id="planning" className="row work-tab">
              <div className="col-sm-12 col-md-3 col-lg-2">
                <h5>Components</h5>
              </div>
              <div className="col-sm-12 col-md-10">
                <p>
                  Here are some examples of components I have built at Nextiva.
                </p>

                <img src={NextivaDsElements} className="img-fluid img-thumbnail mt-4" alt="Design system base elements" />
                <img src={NextivaTableDocs} className="img-fluid img-thumbnail mt-4" alt="Design system Table Docs" />
                <img src={NextivaTableComponent} className="img-fluid img-thumbnail mt-4" alt="Design system table component" />
              </div>
            </div>

          </div>

          <NextLink nextLink={{ name: "Nextiva - Design system", slug: "/nextiva-design-system" }} />

        </div>
      );
    }
  }
}
