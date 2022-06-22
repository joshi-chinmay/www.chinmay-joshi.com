import React, {Component} from 'react';

import Tags from './util/Tags';
import JavaScriptImg from '../images/javascript.jpeg';

export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };

    this.populateArticleList = this.populateArticleList.bind(this);
    this.getArticleBody = this.getArticleBody.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    this.populateArticleList();
    document.title = "Blog | Chinmay Joshi";
  }

  getArticles() {
    const articleList = this.state.articles.map((article) =>
      this.getArticleBody(article)
    );
    return(articleList);
  }

  getArticleBody(article) {
    return(
      <div className="col-sm-12 col-md-6 p-4" key={Math.random()}>
        <div className="article-container">
          <div className="card h-100">
            <img src={article.cover_image || JavaScriptImg} className="card-img-top" alt="article cover" />

            <div className="card-header">
              <a href={article.url} className="h2 font-weight-bold">
                {article.title.replace(/(.{60})..+/, "$1...")}
              </a>
            </div>

            <div className="card-body">
              <span>
                {article.description.replace(/(.{98})..+/, "$1...")}
              </span>

              <br />
              <br />

              <div className="w-100">
                <Tags tags={article.tag_list} />

                <span className="d-inline float-right">
                  {article.readable_publish_date}
                </span>
              </div>
            </div>

            <div className="card-footer single-link">
              <a href={article.url}>Read more</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  populateArticleList() {
    const username = 'joshichinmay';
    const apiURL = "https://dev.to/api/articles?username=" + username;

    fetch(apiURL)
    .then(function(response) {
      return response.json();
    })
    .then(response => {
      this.setState({articles: response});
    });
  }

  render() {
    return(
      <div className="blogs-container">
        <div className="row">
          {this.getArticles()}
        </div>
      </div>
    );
  }
}
