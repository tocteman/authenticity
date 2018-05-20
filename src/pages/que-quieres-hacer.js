import React from "react";
import Link from "gatsby-link";
import FaLongArrowRight from "react-icons/lib/fa/long-arrow-right"
import FaLongArrowLeft from "react-icons/lib/fa/long-arrow-left"


const QueQuieresHacer = () => (
  <div className="flex flex-col items-center justify-center w-full bg-black py-8">
    <div className="flex flex-col justify-between">
      <div className="font-serif text-3xl md:text-5xl text-white my-4 text-center md:text-left">¿Qué quieres hacer?</div>
      <div className="flex flex-col mx-auto my-4">
        <Link to="/como-de-hambriento-estas/"><button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase hover:bg-grey-darkest bg-black w-64 md:w-96"><FaLongArrowRight />  Quiero un lugar embrujado</button></Link>
        <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64 md:w-96">Quiero zapateo</button>
        <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64 md:w-96">Quiero un sitio romántico</button>
        <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64 md:w-96">Recordar la comida de mi madre</button>
      </div>
      <div className="font-mono text-grey-dark text-sm"><Link to="/con-quien-estas/" className="no-underline text-grey-dark text-center md:text-left"> <FaLongArrowLeft />  Regresar</Link></div>
    </div>
  </div>
);

export default QueQuieresHacer;