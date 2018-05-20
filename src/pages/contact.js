import React from "react";
import Link from "gatsby-link";

const ContactPage = () => (
  <div className="w-full bg-white">
  <form className="mx-auto font-mono max-w-md mx-auto pb-16">
    <p className="leading-loose font-serif mb-8 mt-32 text-3xl md:text-5xl">Cuéntanos
    </p>

    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="first-name"
    >
      Nombre
    </label>
    <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="first-name"
      type="text"
      placeholder="Juana"
    />

    <label
      className="block font-bold mb-2 text-xs uppercase"
      htmlFor="last-name"
    >
      Apellido
    </label>
    <input
      className="appearance-none block bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      id="last-name"
      type="text"
      placeholder="de Arco"
    />

    <label className="block font-bold mb-2 text-xs uppercase" htmlFor="message">
      Mensaje
    </label>
    <textarea
      className="appearance-none bg-grey-lighter mb-6 p-3 rounded-md text-grey-darker w-full"
      placeholder="Estamos atentos..."
      rows="8"
    />

    <button className="bg-black hover:bg-grey-darkest px-6 py-3 uppercase text-sm text-white">
      Enviar
    </button>
  </form>
  </div>
);

export default ContactPage;
