import React from "react";
import Link from "gatsby-link";
import FaGlass from 'react-icons/lib/fa/glass';

const AboutPage = () => (
  <div className="flex flex-col bg-black justify-around items-center">
    <div className="md:flex mx-auto justify-center">
      <div className="text-grey-lightest font-mono leading-normal p-8 md:px-16 max-w-sm">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum explicabo quos ipsa libero ut enim cupiditate at voluptatibus eligendi molestiae id laboriosam hic accusantium corrupti. Assumenda dignissimos ipsam esse eos nemo, nihil accusantium maxime alias, totam voluptatum magnam suscipit? Numquam ea fugiat rerum molestias culpa facere provident, vel beatae eum exercitationem voluptate odit perspiciatis voluptas voluptatem aperiam est repellat delectus cumque dolores consequatur?</p>
      </div>
      <div className="text-grey-lightest font-serif leading-tight text-3xl md:text-4xl p-8 md:px-16 max-w-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore laboriosam veniam nobis unde dicta possimus sapiente hic provident impedit natus excepturi maiores assumenda asperiores inventore, delectus ea autem eaque officiis ipsum ex! Incidunt ab inventore, excepturi dolorem quaerat modi.
      </div>
    </div>
    <div className="flex flex-col">
    <div className="px-8 md:px-16 mt-8 text-center self-center text-white font-light font-serif text-xl">
      <em><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ab!</p></em>
      <p className="text-5xl py-4"><FaGlass /></p>
        <Link to="/donde-estas/"><button className="px-4 py-2 mt-4 border-grey-darkest border-2 hover:bg-grey-darkest font-mono text-sm tracking-wide">EMPECEMOS</button></Link>
    </div>
  </div>
  </div>
);

export default AboutPage;
