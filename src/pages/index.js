import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div className="flex flex-col items-center justify-center w-full bg-white">
    <div className="mx-auto text-center self-center items-center">
    <p className="border border-black px-4 md:px-8 py-4 font-serif tracking-very-wide font-medium text-2xl md:text-3xl lg:text-5xl">AUTHENTICITY</p>
    <p className="font-serif pt-4"><em>Lorem ipsum dolor sit amet consectetur.</em></p>
    <br/>
    <br/>
    <br/>
    <br/>
      <Link to="/donde-estas/" className="text-grey-darkest no-underline hover:text-grey-lightest group-hover:text-grey-lightest font-mono bg-black text-white text-sm"><button className="bg-black border group border-black text-white text-lg font-serif py-4 px-8 hover:bg-grey-darkest font-mono"> EMPECEMOS</button></Link>
    </div>
  </div>
);

export default IndexPage;
