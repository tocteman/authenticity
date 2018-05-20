import React from "react";
import Link from "gatsby-link";
import FaLongArrowRight from "react-icons/lib/fa/long-arrow-right"
import FaLongArrowLeft from "react-icons/lib/fa/long-arrow-left"
import MoneyBag from "../images/rich.svg"



const ComoVasDePresupuesto = () => (
  <div className="flex flex-col items-center justify-center w-full bg-white">
    <div className="md:flex justify-start items-center">
      <div className="flex flex-col">
        <div className="text-center"><img src={MoneyBag} width="128" /></div>
        <div className="font-serif text-3xl md:text-5xl mx-auto text-center max-w-sm leading-tight text-black">¿Cómo vas de presupuesto?</div>
      </div>
      <div className="flex flex-col my-8 text-center">
      <button className="mx-auto border-black border-2 my-2 mr-8 px-4 py-3 font-mono text-black uppercase cursor-default bg-white w-64">Ni me sobra ni me falta</button>
      <button className="mx-auto border-black border-2 my-2 mr-8 px-4 py-3 font-mono text-black uppercase cursor-default bg-white w-64">¿Tienes algo low cost?</button>
      <Link to="/bar-palentino/" className="text-center"><button className="mx-auto border-black border-2 my-2 md:mr-8 px-4 py-3 font-mono text-black uppercase hover:bg-grey-lighter bg-white w-64"><FaLongArrowRight/>  Eso no es problema</button></Link>
      <div className="font-mono text-grey-dark text-sm my-4"><Link to="/como-de-hambriento-estas/" className="no-underline text-grey-dark"> <FaLongArrowLeft />  Regresar</Link></div>
      </div>
    </div>
  </div>
);

export default ComoVasDePresupuesto;