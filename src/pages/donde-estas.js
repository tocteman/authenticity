import React from "react";
import Link from "gatsby-link";

const DondeEstas = () => (
  <div className="flex flex-col items-center justify-center w-full bg-white">
    <div className="font-serif text-3xl md:text-5xl mx-auto text-center">¿Dónde estás?</div>
    <div>
      <form>
        <label className="font-serif hidden" for="elegir-ciudad">Ciudad</label>
        <div className="relative bg-grey-lightest">
          <select name="ciudad" id="ciudad" className="uppercase font-mono border-2 px-4 py-2  mt-6 block w-full appearance-none text-grey-darkest font-serif bg-white border-grey-darkest my-2 pr-8 mx-auto" id="elegir-ciudad">
            <option value="granada">Granada</option>
          </select>
          <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg className="fill-current ml-4 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
        <Link to="/que-estas-haciendo-aqui/" className="no-underline text-white"><button className="mt-4 font-mono uppercase text-sm text-white border-grey-darkest border-2 px-4 py-3 bg-black hover:bg-grey-darkest text-center mx-auto">Seguir</button></Link>
      </form>
    </div>

    
  </div>
);

export default DondeEstas;


