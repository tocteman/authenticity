import React from "react";
import Link from "gatsby-link";
import RoomService from "../images/room-service.svg"
import FaLongArrowRight from "react-icons/lib/fa/long-arrow-right"
import FaLongArrowLeft from "react-icons/lib/fa/long-arrow-left"


const QueQuieresHacer = () => (
  <div className="flex flex-col items-center justify-center w-full bg-white">
    <div className="md:flex justify-center items-center md:flex-row-reverse">
      <div className="flex flex-col md:ml-16">
        <div className="text-center"><img src={RoomService} width="128" /></div>
        <div className="font-serif text-3xl md:text-5xl mx-auto text-center max-w-sm leading-tight text-black md:text-left text-center">¿Cómo de hambriento estás?</div>
      </div>
      <div className="flex flex-col mx-automx-auto ">
      <button className="mx-auto border-black border-2 my-2 md:mr-8 px-4 py-3 font-mono text-black uppercase cursor-default bg-white w-64">Poco</button>
      <button className="mx-auto border-black border-2 my-2 md:mr-8 px-4 py-3 font-mono text-black uppercase cursor-default bg-white w-64">Mucho, soy vegetariana</button>
        <Link to="/como-vas-de-presupuesto/" className="text-center"><button className="mx-auto border-black border-2 my-2 md:mr-8 px-4 py-3 font-mono text-black uppercase hover:bg-grey-lighter bg-white w-64"><FaLongArrowRight/>  ¿Hay tapas gratis?</button></Link>
      <button className="mx-auto border-black border-2 my-2 md:mr-8 px-4 py-3 font-mono text-black uppercase cursor-default bg-white w-64">Hay hueco de algo</button>
      <div className="font-mono text-grey-dark text-sm my-4"><Link to="/que-quieres-hacer/" className="no-underline text-grey-dark text-center md:text-left"> <FaLongArrowLeft />  Regresar</Link></div>
      </div>
      
    </div>
  </div>
);

export default QueQuieresHacer;