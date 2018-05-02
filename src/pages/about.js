import React from "react";
import Link from "gatsby-link";
import FaGlass from 'react-icons/lib/fa/glass';

const AboutPage = () => (
  <div className="bg-black">
    <div className="flex p-8">
      <div className="w-2/5 text-grey-lightest font-mono leading-normal text-lg p-16">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum explicabo quos ipsa libero ut enim cupiditate at voluptatibus eligendi molestiae id laboriosam hic accusantium corrupti. Assumenda dignissimos ipsam esse eos nemo, nihil accusantium maxime alias, totam voluptatum magnam suscipit? Numquam ea fugiat rerum molestias culpa facere provident, vel beatae eum exercitationem voluptate odit perspiciatis voluptas voluptatem aperiam est repellat delectus cumque dolores consequatur?</p>
      </div>
      <div className="w-3/5 text-grey-lightest font-serif leading-tight text-5xl p-16">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore laboriosam veniam nobis unde dicta possimus sapiente hic provident impedit natus excepturi maiores assumenda asperiores inventore, delectus ea autem eaque officiis ipsum ex! Incidunt ab inventore, excepturi dolorem quaerat modi.
      </div>
    </div>
    <div className="flex">
    <div className="flex-1 w-5/5 px-32 text-center self-center text-white font-light font-serif text-xl">
      <em><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ab!</p></em>
      <br/>
      <br/>
      <p className="text-5xl"><FaGlass /></p>
        <br />
        <br />
        <br />
    </div>
  </div>
  </div>
  
);

export default AboutPage;
