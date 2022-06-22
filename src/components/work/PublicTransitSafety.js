import React, {Component} from 'react';

import WorkTabLandingInfo from '../util/WorkTabLandingInfo';
import NextLink from '../util/NextLink';

import TransitSafety from '../../images/work/transit-safety/transity.png';
import TransitSafetyUserAudiance from '../../images/work/transit-safety/transity-user-audiance.jpeg';
import Storyboard from '../../images/work/transit-safety/Storyboard.png';
import SecondaryResearch from '../../images/work/transit-safety/secondary-research.png';
import CircleScopping from '../../images/work/transit-safety/circle-scopping.jpeg';
import Moscow from '../../images/work/transit-safety/moscow.jpeg';
import Brainmap from '../../images/work/transit-safety/Brainmap - Transit Safety.jpg';

import Comp1 from '../../images/work/transit-safety/competitors/comp1.jpeg';
import Comp2 from '../../images/work/transit-safety/competitors/comp2.jpeg';
import Comp3 from '../../images/work/transit-safety/competitors/comp3.jpeg';

import Persona1 from '../../images/work/transit-safety/user-persona/persona-1.jpg';
import Persona2 from '../../images/work/transit-safety/user-persona/persona-2.jpg';
import Persona3 from '../../images/work/transit-safety/user-persona/persona-3.jpg';

import UserStory1 from '../../images/work/transit-safety/user-flow/userstory1.png';
import UserStory2 from '../../images/work/transit-safety/user-flow/userstory2.png';
import UserStory3 from '../../images/work/transit-safety/user-flow/userstory3.png';

import BrandIdentity from '../../images/work/transit-safety/brand.png';

import Wireframe1 from '../../images/work/transit-safety/wireframes/w1.png';
import Wireframe2 from '../../images/work/transit-safety/wireframes/w2.png';
import Wireframe3 from '../../images/work/transit-safety/wireframes/w3.png';

import HighFidelityProto from '../../images/work/transit-safety/proto.png';

export default class PublicTransitSafety extends Component {
  componentDidMount() {
    document.title = "Thesis - Public Transit Safety | Chinmay Joshi";
  }

  render() {
    return(
      <div className="work-page-container">
        <WorkTabLandingInfo
          pageHeading="Transity"
          pageDescription="Transity is on a mission to create safer and accessible travel for everyone. Traveling in a public transit system at any given time should not feel unsafe for anyone. This case study will focus on creating awareness & providing critical and analytical insights on how people can make individual decisions while using public transportation."
          landingPageImage={TransitSafety}
          tags={["UX Research", "UX Design", "Information Architecture", "Visual Design", "Usability Testing"]}
          overview="Transity is a final thesis defense case study past of MS - User Experience & Interaction Design at Thomas Jefferson University. Transity is introducing community-based solutions which can help make safer transit opportunities for everyone."
          role="I worked on this project as a full-time product designer and along with advisors Mike Begley, Neil Harner, and Lauren Dillard."
          jumpToProto="#wireframes"
        />

        <div className="work-page-presnetation">
          <div id="initial" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Abstract
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                People use different public transport modes every day like buses, trains, metros, subway systems, and shuttle services to travel from one place to another. Essentially people commute for work, inter-city connections, or to escape traffic congestion.
              </p>
              <p>
                Public transportation is mostly seen to be reliable and feasible as compared to private commutes. However, it has been observed that the commuters’ decisions to opt for public transport options have been impacted due to safety concerns. Traveling along with unknown people at an arbitrary time and at times in unknown locations is mentally challenging for many audiences. Instances such as being a victim of - physical assault, sexual harassment, verbal abuse, vandalism, and theft have been marked to be shared in individuals. These unsafe scenarios and induced fear in commuters impacts choices of public transport at any given time.
              </p>
            </div>
          </div>

          <div id="targetAudience" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Target Audience
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                User interviews are an excellent strategy to get inside the user’s head. However, first, we need to define our target audience. Based on initial research, the following was the target audience for the user interviews.
              </p>
              <p>
                “People boarded public transportation approximately 34 million times each week, showing an increase of 21% each year. Public transportation is mostly seen to be reliable and feasible as compared to private commutes. More than three-fourths of transit riders (78%) are either currently employed or preparing for employment, and 7% are students. Research says 44% of employed individuals find public transportation more convenient than driving private vehicles, and 40% of employed individuals say they do not have an alternate solution due to lack of money or a vehicle.”
              </p>
              <div className="table table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="font-weight-bold">
                      <td>Who is the User?</td>
                      <td>... their needs?</td>
                      <td>what challenges they face?</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Every person who commutes on public transit system.</td>
                      <td>To commute hassle free and securely to the destination.</td>
                      <td>They become the victims of bad situations such as theft, physical and verbal abuse.</td>
                    </tr>
                  </tbody>
                </table>

                <img src={TransitSafetyUserAudiance} className="img-fluid img-thumbnail" alt="transit safety user audiance" />
              </div>
            </div>
          </div>

          <div id="problemStatement" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Storyboard
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                Katie is a UX Designer and HCI major from SJSU. As she advances her education, she receives a part-time opportunity to work in a design agency in San Francisco. While it's not a lot of money, but a stepping stone in her career path. Considering her academic schedule + part-time job, she's juggling many things at once. Hence, she has working hour flexibility at the office.
              </p>
              <p>
                On a day-to-day basis, she commutes from her home to office to university and back home in public transport. It is the cheapest yet viable option for her.
              </p>
              <p>
                She rides public transport at random times, sometimes late at night, because her classes are late in the evening. Sometimes she has hard deadlines at the office, which keeps her in the office until late evenings. And that frightens her the most. She has witnessed and heard enough crimes happening on the public commute from her friends and the news. She was a victim of a drunk man's abnormal activities on public transport. Since that day, her family has instructed her not to take public transportation at all.
              </p>
              <p>
                So, when it's late-night, she has to rely on financially unreliable options, which puts her in an uncomfortable position.
              </p>

              <img src={Storyboard} className="img-fluid img-thumbnail" alt="storyboard of a girl who struggles through the issues of public transit safety" />
            </div>
          </div>

          <div id="userInterviews" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                User interviews
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                I kept my user interviews open-ended & communication-oriented. I wanted users to talk more than I should. I was on the lookout for stories. Hence, I made an effort to ask less but the right questions to generate a sense of open-ended conversation. This strategy helped me get the best answers out of the user interviews. It also gave me a new way to look at my hypothesis. Following are some sample questions I asked my target audience.
              </p>
              <br />
              <ol>
                <li>Frequently visited places every week?</li>
                <li>How do you commute to the mentioned place?</li>
                <li>How's your usual commute experience?</li>
                <li>How safety and security matters to you?</li>
                <li>How does safety & security change your perspective of traveling on the public commute?</li>
                <li>Tell me one thing that would make you use public transport over a private vehicle.</li>
              </ol>
            </div>
          </div>

          <div id="userPersona" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                User Persona
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="table-responsive">
                <table className="table table-borderless table-user-persona">
                  <tbody>
                    <tr>
                      <td>
                        <img src={Persona1} className="img-fluid img-thumbnail" alt="user personal profile" />
                        <span>Photo by KAL VISUALS on Unsplash</span>
                      </td>
                      <td>
                        <img src={Persona2} className="img-fluid img-thumbnail" alt="user personal profile" />
                        <span>Photo by Evan Dvorkin on Unsplash</span>
                      </td>
                      <td>
                        <img src={Persona3} className="img-fluid img-thumbnail" alt="user personal profile" />
                        <span>Photo by Christiana Rivers on Unsplash</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5>User #1</h5>
                        Anabel Wallace<br />
                        <span>Data Analyst at Realtor.com</span>
                      </td>
                      <td>
                        <h5>User #2</h5>
                        Brook Curtis<br />
                        <span>Software Engineer at Salesforce</span>
                      </td>
                      <td>
                        <h5>User #3</h5>
                        Britney Brooks<br />
                        <span>UX Designer and Freelancer</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>I don’t have accessible public transit near my office. Hence, I take my car with me every day.</li>
                          <li>Uber is pretty expensive.</li>
                          <li>When I was in the university, I had to switch 2 trains every day.</li>
                          <li>At times due to transit delays I have attended my lectures while I was on the public transit.</li>
                          <li>My safety measures were violated by a homeless/drunk man who was on the same train as me. Since then I decided not to rely much on public transport.</li>
                          <li>Family constantly worries about my safety as we live miles apart.</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>I take the train every day. My office is in the heart of San Francisco. In the morning a lot of office workers board the train. But in the evening you may never know who’d be there.</li>
                          <li>I have been physically and verbally abused by a drunk man. He pissed all over himself and it was a chaos in the train.</li>
                          <li>I have seen many homeless people on the train station, they follow and bug people for money and food. They don’t usually harm you but sometimes there’s use of abusive language.</li>
                          <li>In the evening I have to keep an eye on my belongings because I don’t know if pickpocketer would snatch something from me.</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>To me public transport has always been a scary experience. I am afraid of people who board the train and bus.</li>
                          <li>At times, transit facilities are smelly and it feels unhygienic.</li>
                          <li>I take public transit if and only if I have company.</li>
                          <li>My friends have shared many bad stories of public transit which includes verbal abuse and public drunkenness.</li>
                          <li>I used to visit nearest Starbucks and wait for my train to arrive. Once I see the train I used to leave the premise to board the train.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="secondaryResearch" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Secondary research
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                The secondary research/bibliography is a thorough study of American Transit Systems. All the resources and materials belong to the mentioned organizations and are not the property of my own. Research material might contain sensitive information regarding Transit Systems. Secondary research gave me a strong understanding of current strategies deployed by transit agencies.
              </p>
              <br />

              <img src={SecondaryResearch} className="img-fluid img-thumbnail" alt="Secondary research with government" />

              <br /><br />
              <p>
                Forty-five agencies surveyed recorded just over 37,000 offenses. Of the total, approximately 29,000 (78 percent) were less serious, and 8,000 (22 percent) were serious. Of the serious crimes, 2,700 were violent, approximately 34 percent of serious crimes, and 7 percent of total reported crimes - about one of every 14 crimes.
              </p>
            </div>
          </div>

          <div id="circleScopping" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Circle scopping analysis
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                Through the user interviews and secondary research phase, I collected many data points, which created a lot of confusion in my head. I started losing vision and wrapped myself with multiple ideas at a time. Not all problems can be solved in one day. To solve a large puzzle, one must fix a piece of it. Hence, to gain more clarity, I decided to analyze my problem space with circle scoping analysis. That helped me narrow down which problem space I am going to focus on.
              </p>
              <br />

              <img src={CircleScopping} className="img-fluid img-thumbnail" alt="Circle scopping analysis done using Miro and insights from primary & secondary analysis" />
            </div>
          </div>

          <div id="problemStatement" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Problem Statement
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                According to the American Public Transportation Association (APTA), people boarded public transportation approximately 34 million times each week, showing an increase of 21% each year. Public transportation is mostly seen to be reliable and feasible as compared to private commutes. More than three-fourths of transit riders (78%) are either currently employed or preparing for employment, and 7% are students. Research says 44% of employed individuals find public transportation more convenient than driving private vehicles, and 40% of employed individuals say they do not have an alternate solution due to lack of money or a car. The primary reason for public transportation is to get to work, go to school, visit friends, or for medical appointments. The use of public transit directly impacts the local economy through revenue generation.
              </p>
              <p>
                However, public transit is notorious for violence and fear of violence. Personal security affects many people's decisions to use public transportation. Both acts and perceptions of violence cause loss of ridership and revenues. Every year approximately 29,300 "less-serious" crimes and 7,930 "more-serious" crimes are recorded. Disorderly conduct, public drunkenness, fare evasion, and theft are "less-serious" crimes. Narcotics and weapon violations, sexual assault, and physical and verbal abuse are considered to be "serious crimes/offenses."
              </p>
              <p>
                These offenses take place despite having a fully functioning system and prevention strategies by the transit-governing agencies. The government has implemented numerous advanced algorithms and security programs to ensure the passengers' safety and security. There are applications in the market that show live crime updates in the area. Despite all that, people still feel insecure boarding the transit facility at any given time.
              </p>
            </div>
          </div>

          <div id="howMightWe" className="row work-tab">
            <div className="col-sm-12 col-md-12 text-center">
              <hr />
              <h2 className="my-5">
                How might we increase ridership for public transit and render a safe and secure experience for daily commuters who are obligated to commute using public transportation?
              </h2>
              <hr />
            </div>
          </div>

          <div id="brainmap" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Brainmap
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <img src={Brainmap} className="img-fluid img-thumbnail" alt="brainmap of user interviews" />
            </div>
          </div>

          <div id="competitorAnalysis" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Competitor Analysis
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="table-responsive">
                <table className="table table-borderless table-competitors">
                  <tbody>
                    <tr className="text-center">
                      <td>
                        <img src={Comp1} alt="competitor applications" className="img-fluid img-thumbnail" />
                      </td>
                      <td>
                        <img src={Comp2} alt="competitor applications" className="img-fluid img-thumbnail" />
                      </td>
                      <td>
                        <img src={Comp3} alt="competitor applications" className="img-fluid img-thumbnail" />
                      </td>
                    </tr>
                    <tr className="text-center">
                      <td>Transit App</td>
                      <td>Citizen</td>
                      <td>Citymapper</td>
                    </tr>
                    <tr>
                      <td>
                        <ul>
                          <li>Real-time updates of your ride.</li>
                          <li>Plans future trips using AI.</li>
                          <li>Real time stats - time to leave, fastest route.</li>
                          <li>Integration with Uber, Bikeshare, Carshare.</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Real-time, lifesaving alerts.</li>
                          <li>Alerts go out within 90 seconds of a 911 or user report and are verified by trained Citizen agents.</li>
                          <li>Live videos and streams.</li>
                        </ul>
                      </td>
                      <td>
                        <ul>
                          <li>Journey planner includes travel plans and daily routes.</li>
                          <li>Real-time updates of your ride.</li>
                          <li>A friend can follow your trip and will know your ETA.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div id="moscow" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                MoSCoW Analysis
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                In order to make my product successful, I decided to list down all the features on a piece of paper and started prioritizing them with MoSCoW Analysis given below.
              </p>
              <br />
              <img src={Moscow} className="img-fluid img-thumbnail" alt="feature prioratization" />
              <br />
              <br />

              <table className="table table-borderless table-user-persona">
                <tbody>
                  <tr>
                    <td>
                      <h4>Transit Community</h4>
                    </td>
                    <td>
                      <h4>Call SOS</h4>
                    </td>
                    <td>
                      <h4>Find a Buddy</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        A search feature will allow users to quickly search for trains & buses near the area. It will also provide density-based updates to the user.
                      </p>
                    </td>
                    <td>
                      <p>
                        The integral part of the Transity is a person’s safety & security. On the go, the SOS feature will allow users to send messages and call alerts to the selected user or 911.
                      </p>
                    </td>
                    <td>
                      <p>
                        Buddy is a community-oriented experiment feature that will allow users to search for a travel buddy with a set of constraints.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="userJourneyMap" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                User journey map
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                Once I defined the primary features of Transity, I started creating end-to-end user flows for clarity. This exercise allowed me to focus on user interaction with the app.
              </p>
              <div className="text-center">
                <img src={UserStory1} className="img-fluid img-thumbnail mb-5" alt="brainmap of user interviews" />
                <img src={UserStory2} className="img-fluid img-thumbnail mb-5" alt="brainmap of user interviews" />
                <img src={UserStory3} className="img-fluid img-thumbnail mb-5" alt="brainmap of user interviews" />
              </div>
            </div>
          </div>

          <div id="brandIdentity" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Brand guidelines
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <p>
                My product & vision was taking shape and I was ready to put together brand identity for the product.
              </p>
              <div className="text-center">
                <img src={BrandIdentity} className="img-fluid img-thumbnail mb-5" alt="brainmap of user interviews" />
              </div>
            </div>
          </div>

          <div id="wireframes" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Wireframes
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="text-center">
                <img src={Wireframe1} className="img-fluid img-thumbnail mb-5" alt="Black and white wireframes" />
                <img src={Wireframe2} className="img-fluid img-thumbnail mb-5" alt="Black and white wireframes" />
                <img src={Wireframe3} className="img-fluid img-thumbnail mb-5" alt="Black and white wireframes" />
              </div>
            </div>
          </div>

          <div id="prototype" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                High fidelity prototype
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <div className="text-center">
                <img src={HighFidelityProto} className="img-fluid img-thumbnail" alt="high fidelity non-clickable prototype" />
              </div>
            </div>
          </div>


          <div id="takeaways" className="row work-tab">
            <div className="col-sm-12 col-md-3 col-lg-2">
              <h5>
                Takeaways & Future Scope
              </h5>
            </div>
            <div className="col-sm-12 col-md-10">
              <ol>
                <li>
                  Transity has a lot of room to grow. It is a community-driven platform yet, it is only accessible via mobile app. Having a website/web presence of the app will add more value to its users.
                </li>
                <li>
                  The dashboard map can be configured with informative details such as alerts, notifications & nearby news.
                </li>
                <li>
                  This case study helped me tremendously to understand how to measure user interaction and feedback mechanisms.
                </li>
              </ol>
            </div>
          </div>


          <NextLink nextLink={{name: "Step Up - A Fitness App", slug: "/step-up"}} />
        </div>
      </div>
    );
  }
}
