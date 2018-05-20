import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
require('typeface-ibm-plex-mono');
require('typeface-eb-garamond');

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="Authenticity"
      meta={[
        { name: "description", content: "Sample" },
        { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div className="flex flex-1 md:justify-center min-h-full leading-normal w-full bg-black font-serif">      
    {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
