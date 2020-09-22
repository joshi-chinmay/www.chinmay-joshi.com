import React, {Component} from 'react';
import { motion } from 'framer-motion';

export default class SlideIn extends Component {
  render() {
    const pageVariants = {
      in: {
        opacity: 1,
        x: 0,
      },
      out: {
        opacity: 0,
        x: '-20px',
      }
    }

    const pageTransition = {
      type: "tween",
      transition: "ease",
      duration: 1
    }

    return(
      <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        {this.props.children}
      </motion.div>
    );
  }
}
