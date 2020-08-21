import React, {Component} from 'react';

export default class Tags extends Component {
  tagsHTML(tags) {
    let allTags = [];

    for (let i = 0; i < tags.length; i++) {
      allTags.push(
        <span key={i} className="badge badge-pill badge-primary mr-2">
          {tags[i]}
        </span>
      )
    }

    return(allTags);
  }

  render() {
    return(
      <div className="tags-container">
        { this.tagsHTML(this.props.tags) }
      </div>
    );
  }
}
