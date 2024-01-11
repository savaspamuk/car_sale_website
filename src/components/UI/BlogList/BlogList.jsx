import React from "react";
import "./BlogList.css";
import { Col } from "reactstrap";
import blogReview from "../../../assets/data/blogReviews";

const BlogList = () => {
  return (
    <>
      {blogReview.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description } = item;
  return (
    <Col lg="4" md="4" sm="6">
      <div className="blog__item">
        <img src={imgUrl} alt="Blog Review" />
        <div className="blog__info">
          <a href={`/blogs${title}`}>{title}</a>
          <p className="sesction__description">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>
          <a href={`/blogs${title}`} className="read__more">
            Read More
          </a>
          <div className="blog__date">
            <span className="blog__author">
              <i class="ri-user-3-line"></i> {author}
            </span>
            <span className="blog__author">
              <i class="ri-calendar-2-line"></i> {date}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
