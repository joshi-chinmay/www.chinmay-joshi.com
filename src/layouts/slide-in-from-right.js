import React, {Component} from 'react';
import { motion } from 'framer-motion';

export default class SlideInFromRight extends Component {
  render() {
    const pageVariants = {
      in: {
        opacity: 1,
        x: '-1vw',
      },
      out: {
        opacity: 0,
        x: 0,
      }
    }

    const pageTransition = {
      type: "tween",
      transition: "easeIn",
      duration: 1.2
    }

    return(
      <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        {this.props.children}
      </motion.div>
    );
  }
}
