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
        x: '-100vw',
      }
    }

    const pageTransition = {
      type: "tween",
      ease: "linear",
      duration: 0.4
    }

    return(
      <motion.div initial="out" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
        {this.props.children}
      </motion.div>
    );
  }
}
