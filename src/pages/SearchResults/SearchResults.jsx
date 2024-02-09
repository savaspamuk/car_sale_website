import React from "react";
import SearchResultsPage from "../../components/UI/SearchResultsPage/SearchResultsPage";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection/CommonSection";

const SearchResults = () => {
  return (
    <Helmet title="Search Results">
      <CommonSection title="Search Results" />
      <SearchResultsPage />
    </Helmet>
  );
};

export default SearchResults;
