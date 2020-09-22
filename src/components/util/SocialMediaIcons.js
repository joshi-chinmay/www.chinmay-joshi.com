import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export default class SocialMediaIcons extends Component {
  render() {
    const container = {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.6,
          when: "beforeChildren",
          staggerChildren: 0.3
        }
      }
    };

    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };

    return(
      <motion.div className="social-media-icons" variants={container} initial="hidden" animate="visible">
        <motion.a className="social-media-icon" href="mailto:chinmayj93@gmail.com" variants={item}>
          <FontAwesomeIcon icon={["far", "envelope"]} />
        </motion.a>
        <motion.a className="social-media-icon" href="https://dev.to/joshichinmay" variants={item}>
          <FontAwesomeIcon icon={["fab", "dev"]} />
        </motion.a>
        <motion.a className="social-media-icon" href="https://www.linkedin.com/in/chinmay-joshi-65292598/" variants={item}>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </motion.a>
        <motion.a className="social-media-icon" href="https://github.com/joshi-chinmay" variants={item}>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </motion.a>
      </motion.div>
    );
  }
}
