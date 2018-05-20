import React from "react";
import Link from "gatsby-link";
import FaLongArrowRight from "react-icons/lib/fa/long-arrow-right"
import FaLongArrowLeft from "react-icons/lib/fa/long-arrow-left"


const QueEstasHaciendoAqui = () => (
  <div className="flex flex-col items-center justify-center w-full bg-black">
    <div className="flex flex-col justify-between">
      <div className="font-serif text-3xl md:text-5xl text-white my-8 text-center md:text-left">¿Qué estás haciendo aquí?</div>
      <div className="md:flex mx-auto my-4 text-center md:text-left">
        <div className="md:w-1/2 md:flex mx-auto flex-col">
          <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">Vivo aquí</button>
           <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black  w-64">Viaje de trabajo</button>
          <button className="border-white border-2 my-2 md:mr-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">He venido a matar a alguien</button>
        </div>
        <div className="md:w-1/2 md:flex mx-auto flex-col">
          <button className="border-white border-2 my-2 mx-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">Me voy ya</button>
          <Link to="/con-quien-estas/"><button className="border-white border-2 my-2 mx-8 px-4 py-3 font-mono text-white uppercase hover:bg-grey-darkest bg-black w-64"><FaLongArrowRight />  Quiero perderme</button></Link>
          <button className="border-white border-2 my-2 mx-8 px-4 py-3 font-mono text-white uppercase cursor-default bg-black w-64">Vine con amigos</button>
        </div>
      </div>
      <div className="font-mono text-grey-dark text-sm text-center md:text-left pb-8"><Link to="/donde-estas/" className="no-underline text-grey-dark"> <FaLongArrowLeft />  Regresar</Link></div>
    </div>
  </div>
);

export default QueEstasHaciendoAqui;