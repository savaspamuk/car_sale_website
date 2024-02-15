import React from "react";
import "./BlogList.css";
import { Col } from "reactstrap";
import blogReviews from "../../../assets/data/blogReviews";
import { Link } from "react-router-dom";

interface Item {
  imgUrl: string;
  title: string;
  author: string;
  date: string;
  description: string;
  id: number;
}

interface BlogItemProps {
  item: Item;
}

const BlogList: React.FC = () => {
  return (
    <>
      {blogReviews.map((item: Item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem: React.FC<BlogItemProps> = ({ item }) => {
  const { imgUrl, title, author, date, description, id } = item;
  return (
    <Col lg="4" md="4" sm="6">
      <Link className="blog" to={"/blogs/" + id}>
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
      </Link>
    </Col>
  );
};

export default BlogList;
