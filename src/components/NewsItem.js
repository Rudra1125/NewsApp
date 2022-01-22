// import { getByTitle } from '@testing-library/react'
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/22/01/realme-9-pro-plus-teaser-and-leak/-952x498w6/gsmarena_000.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1'}}>
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="moreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
