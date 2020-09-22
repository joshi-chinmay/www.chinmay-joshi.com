import React, {Component} from 'react';

import SlideIn from '../layouts/slide-in';

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
      <div className="offset-md-3 col-sm-12 col-md-6 p-4" key={Math.random()}>
        <div className="article-container">
          <div className="card h-100">
            {article.cover_image &&
              <img src={article.cover_image} className="card-img-top" alt="article cover" />
            }

            <div className="card-header font-weight-bold">
              <a href={article.url}>
                {article.title}
              </a>
            </div>

            <div className="card-body">
              <p>
                {article.description}
              </p>

              <div className="w-100">
                <span className="font-weight-bold">
                  { article.tag_list.map(function(x) { return("#" + x) }).join(", ") }
                </span>
                <span className="d-inline float-right">
                  {article.readable_publish_date}
                </span>
              </div>
            </div>

            <div className="card-footer single-link">
              <a className="small float-right" href={article.url}>Read more</a>
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
      <SlideIn>
        <div className="blogs-container">
          <div className="row">
            {this.getArticles()}
          </div>
        </div>
      </SlideIn>
    );
  }
}
