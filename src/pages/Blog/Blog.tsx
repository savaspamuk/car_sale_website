import React from "react";
import Helmet from "../../components/Helmet/Helmet";
import { Container, Row } from "reactstrap";
import CommonSection from "../../components/UI/CommonSection/CommonSection";
import BlogList from "../../components/UI/BlogList/BlogList";

const Blog: React.FC = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
