import React from "react";
import Link from "gatsby-link";
import Chilling from "../images/chilling.svg";

const IndexPage = () => (
  <div className="flex">
    <div className="flex-1"></div>
    <div className="flex-1 text-center self-center">
    <p className="border border-black px-8 py-4 font-serif tracking-very-wide font-medium text-5xl">AUTHENTICITY</p>
    <p className="font-serif pt-4"><em>Lorem ipsum dolor sit amet consectetur.</em></p>
    <br/>
    <br/>
    <br/>
    <br/>
      <button className="border border-black text-black text-lg font-serif tracking-very-wide py-4 px-8 hover:bg-black hover:border-white hover:text-white"> <a href="https://www.dropbox.com/s/j9tobnyjoluuiu3/AT.pdf?dl=0" target="_blank">LOREM IPSUM</a></button>
    </div>
    <div className="flex-1"></div>
  </div>
);

export default IndexPage;
