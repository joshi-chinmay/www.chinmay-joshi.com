import React, {Component} from 'react';
import { motion } from 'framer-motion';

import helloCJ from '../images/hello.jpeg';

export default class About extends Component {
  componentDidMount() {
    document.title = "About | Chinmay Joshi";
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-4 text-center mt-5">
            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <img src={helloCJ} className="mt-5 w-50" alt="I look great. just sayin." />
            </motion.div>
          </div>

          <div className="col-xs-12 col-md-8 mt-5 mb-5">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <h1 className="mt-1">
                Hi, I am Chinmay!
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
              <div className="row mt-4">
                <div className="col-xs-12 col-md-12 mt-3">
                  <p>
                    I am a Software Engineer turned Product Designer having more than five years. In 2015, after completing my masters, I started working at Amura Marketing Technologies, Pune, as a Full Stack Software Engineer. Amura has engineered marketing solutions to support their business needs. It helped me widen my perspectives and gain full-stack engineering experience in the vast technology stack. I was part of three different product teams for three years. The product development processes helped me realize my passion for front-end development and UI engineering. In May 2018, I moved to Malaysia to work for Supahands, a `Software Engineer - II.` My everyday job was to work along with the Engineering & Design team to understand user needs and create intuitive user interfaces, with the business development team to understand business needs and the target audience, with Software engineers to develop the product architecture and APIs, and with front-end engineers to design client-side applications. Every team plays a vital role in delivering a user experience near perfection. Today, I have become a full-time Product Designer with a better understanding of visual design, user experience design, interaction design, research methodologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}
