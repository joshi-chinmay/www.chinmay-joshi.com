import React, {Component} from 'react';

import { motion } from "framer-motion";

export default class Tags extends Component {
  tagsHTML(tags) {
    let allTags = [];

    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };

    for (let i = 0; i < tags.length; i++) {
      allTags.push(
        <motion.span key={i} className="badge badge-pill badge-primary mr-2" variants={item}>
          {tags[i]}
        </motion.span>
      )
    }

    return(allTags);
  }

  render() {
    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.2,
          when: "beforeChildren",
          staggerChildren: 0.1
        }
      }
    };

    return(
      <motion.div className="tags-container" variants={container} initial="hidden" animate="visible">
        { this.tagsHTML(this.props.tags) }
      </motion.div>
    );
  }
}
