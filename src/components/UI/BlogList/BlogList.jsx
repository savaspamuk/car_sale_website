import React from "react";
import "./BlogList.css";
import { Col } from "reactstrap";
import blogReviews from "../../../assets/data/blogReviews";

const BlogList = () => {
  return (
    <>
      {blogReviews.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description } = item;
  return (
    <Col lg="4" md="4" sm="6">
      <a className="blog" href="/blog-details">
        <div className="blog__item">
          <img src={imgUrl} alt="Blog Review" />
          <div className="blog__info">
            <h4>{title}</h4>
            <p className="section__description">
              {description.length > 100
                ? description.substr(0, 100)
                : description}
            </p>
            <div className="blog__tag">
              <span className="blog__author">
                <i className="ri-user-3-line"></i> {author}
              </span>
              <span className="blog__author">
                <i className="ri-calendar-2-line"></i> {date}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default BlogList;
