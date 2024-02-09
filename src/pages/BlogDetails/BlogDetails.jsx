import React, { useEffect } from "react";
import "./BlogDetails.css";
import { Col } from "reactstrap";
import blogReviews from "../../assets/data/blogReviews";

const BlogDetails = () => {
  return (
    <div className="blog__details-container">
      {blogReviews.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </div>
  );
};

const BlogItem = ({ item }) => {
  const {
    imgUrl,
    title,
    author,
    date,
    description,
    description1,
    description2,
  } = item;
  return (
    <Col lg="4" md="4" sm="6">
      <div className="blog__details">
        <img src={imgUrl} alt="Blog Review" />
        <div className="section__title">
          <p>{title}</p>

          <div className="blog__details-date">
            <span className="blog__author">
              <i className="ri-user-3-line"></i> {author}
            </span>
            <span className="blog__date">
              <i className="ri-calendar-2-line"></i> {date}
            </span>
          </div>
          <p className="section__description">{description}</p>
          <p className="section__description">{description1}</p>
          <p className="section__description">{description2}</p>
        </div>
      </div>
    </Col>
  );
};

export default BlogDetails;
