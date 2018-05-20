import React from "react";
import Link from "gatsby-link";
import FaLongArrowRight from "react-icons/lib/fa/long-arrow-right"
import FaLongArrowLeft from "react-icons/lib/fa/long-arrow-left"
import TiArrowBack from 'react-icons/lib/ti/arrow-back'
import FaHeart from "react-icons/lib/fa/heart"

const ConQuienEstas = () => (
  <div className="flex flex-col items-center justify-center w-full bg-black">
    <div className="flex flex-col justify-between">
      <div className="md:flex justify-around items-baseline">
      <div className="text-8xl text-center md:text-left text-white"><FaHeart /></div>
      <div className="font-serif text-3xl md:text-5xl text-white my-8 text-center md:text-right">¿Con quién estás?</div>
      </div>
      <div className="md:flex mx-auto my-4">
        <div className="md:w-1/2 flex flex-col">
          <button className="border-white border-2 my-2 mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">Con mi hámster</button>
          <Link to="/que-quieres-hacer/"><button className="border-white border-2 my-2 px-4 py-3 font-mono text-white uppercase hover:bg-grey-darkest bg-black w-64"><FaLongArrowRight />  Con mi suegra</button></Link>
          <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">Conmigo mismo</button>
        </div>
        <div className="md:w-1/2 flex flex-col">
          <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">Con mi pareja</button>
          <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">Con los amigos</button>
          <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">Con mi ligue de tinder</button>
        </div>
        </div>
      <div className="font-mono text-grey-dark"><Link to="/que-estas-haciendo-aqui/" className="no-underline text-grey-dark text-sm"> <FaLongArrowLeft />  Regresar</Link></div>
      </div>
  </div>
);

export default ConQuienEstas;