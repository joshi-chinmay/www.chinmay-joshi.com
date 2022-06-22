import React, {Component} from 'react';

export default class Tags extends Component {
  tagsHTML(tags) {
    let allTags = [];

    for (let i = 0; i < tags.length; i++) {
      allTags.push(
        <span key={i} className="badge badge-pill badge-primary mx-1 font-weight-bold mb-2">
          {tags[i]}
        </span>
      )
    }

    return(allTags);
  }

  render() {
    return(
      this.tagsHTML(this.props.tags)
    );
  }
}
