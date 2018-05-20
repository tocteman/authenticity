import React from "react";
import Link from "gatsby-link";
import FaStar from "react-icons/lib/fa/star"
import FaStarHalf from "react-icons/lib/fa/star-half"
import FaLongArrowLeft from "react-icons/lib/fa/long-arrow-left"
import Img from 'gatsby-image'
import Palentino1 from "../images/palentino1.jpg"
import Palentino2 from "../images/palentino2.jpg"
import Palentino3 from "../images/palentino3.jpg"
import Mapa from "../images/mapa.png"

const DondeEstas = ({data}) => (
  <div className="md:flex flex-col w-full bg-white">
    <div className="md:flex justify-center">
      <div className="w-full md:w-1/2"><Img sizes={data.palentinoUno.sizes}/></div>
      <div className="w-full md:w-1/2 mx-auto flex flex-col mx-8 justify-center items-center">
        <div className="text-4xl md:text-4xl md:text-6xl uppercase font-serif py-4 md:py-8">Bar Palentino</div>
        <div className="font-mono leading-normal max-w-xs md:max-w-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque veritatis dolores nisi minus porro magni nesciunt quasi consectetur architecto voluptatum distinctio, aut ea odit accusamus in animi ab! Nobis, omnis. <br/>
          <span className="pt-2"><strong>Lorem, ipsum dolor: </strong>Amet. Nesciunt. Distinctio? <br /></span>
        <strong>Sit amet consectetur: </strong>Nulla veritatis ab quaerat.</div>
      </div>
      
    </div>

    <div className="py-8 md-8 md:py-16 md:my-16 mx-auto text-center md:text-left">
      <div className="mx-auto text-4xl md:text-6xl italic max-w-sm md:max-w-lg leading-tight">"Sed ipsum non arurem semper non feugiat aliquam lar tincidunt impsum"</div>
      <div className="font-mono">Sed Sapien Tortot</div>
    </div>

    <div><Img sizes={data.palentinoDos.sizes} /></div>

    <div className="py-8 md-8 md:py-16 md:my-16 mx-auto text-center md:text-left">
      <div className="mx-auto text-4xl md:text-6xl italic max-w-lg leading-tight">"In sagittis magna et porta euismodinarum. Aliquam pulvinar tincidunt just nontu"</div>
      <div className="font-mono">Sed Sapien Tortot</div>
    </div>


    <div><Img sizes={data.palentinoTres.sizes} /></div>

    <div className="flex justify-around my-4 md:my-8 py-8 max-w-xl flex-wrap mx-auto">
    
    <div className="flex">
      <div className="flex flex-col max-w-sm p-4">
        <div className="pb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores aspernatur commodi sapiente incidunt totam vitae dolorum laboriosam obcaecati, explicabo deserunt tenetur, quis veniam excepturi nihil voluptates, ad facilis sit. Voluptate autem adipisci, non dicta veniam ad omnis obcaecati numquam suscipit doloribus velit veritatis consequuntur error tempore ut ipsa in. Sit.</div>
        <div className="flex justify-start items-end">
          <div className="font-mono">DUIS EGET SEM   <FaStar /><FaStar /><FaStar /></div>
        </div>
      </div>
    </div>

    <div className="flex">
      <div className="flex flex-col max-w-sm p-4">
        <div className="pb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores aspernatur commodi sapiente incidunt totam vitae dolorum laboriosam obcaecati, explicabo deserunt tenetur, quis veniam excepturi nihil voluptates, ad facilis sit. Voluptate autem adipisci, non dicta veniam ad omnis obcaecati numquam suscipit doloribus velit veritatis consequuntur error tempore ut ipsa in. Sit.</div>
        <div className="flex justify-start items-end">
            <div className="font-mono">DUIS EGET SEM   <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
        </div>
      </div>
    </div>

        <div className="flex">
          <div className="flex flex-col max-w-sm p-4">
            <div className="pb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores aspernatur commodi sapiente incidunt totam vitae dolorum laboriosam obcaecati, explicabo deserunt tenetur, quis veniam excepturi nihil voluptates, ad facilis sit. Voluptate autem adipisci, non dicta veniam ad omnis obcaecati numquam suscipit doloribus velit veritatis consequuntur error tempore ut ipsa in. Sit.</div>
            <div className="flex justify-start items-end">
              <div className="font-mono">DUIS EGET SEM   <FaStar /><FaStar /><FaStar /><FaStar /></div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col max-w-sm p-4">
            <div className="pb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores aspernatur commodi sapiente incidunt totam vitae dolorum laboriosam obcaecati, explicabo deserunt tenetur, quis veniam excepturi nihil voluptates, ad facilis sit. Voluptate autem adipisci, non dicta veniam ad omnis obcaecati numquam suscipit doloribus velit veritatis consequuntur error tempore ut ipsa in. Sit.</div>
            <div className="flex justify-start items-end">
              <div className="font-mono">DUIS EGET SEM   <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></div>
            </div>
          </div>
        </div>
  </div>

  <div className="flex flex-col mx-auto mt-8 mb-8 text-center">
    <img src={Mapa} width="98" className="mx-auto py-2"/>
    <div className="font-mono uppercase text-lg"> DUIS EGET SEM ET PORTA, 35<br/>EUISMOD, PULVINAR</div>
  </div>

  <div className="flex flex-col mx-auto text-center mt-4 mb-16">
    <div className="text-3xl py-8">Otras sugerencias</div>
    <div className="md:flex">
      <Link to="/donde-estas/"> <button className="m-4 border-2 border-black text-black font-mono py-2 px-3 hover:bg-grey-light"><FaLongArrowLeft/> VOLVER A EMPEZAR</button></Link>
      <button className="m-4 cursor-default border-2 border-black text-black font-mono py-2 px-3 hover:bg-grey-light">LOREM IPSUM</button>
      <button className="m-4 cursor-default border-2 border-black text-black font-mono py-2 px-3 hover:bg-grey-light">LOREM IPSUM</button>
      <Link to="/como-vas-de-presupuesto/"> <button className="m-4 border-2 border-black text-black font-mono py-2 px-3 hover:bg-grey-light"><FaLongArrowLeft/> ATRÁS</button></Link>
    </div>
  </div>

  </div>
);

export const queryPalentino = graphql`
  query fotosPalentino {
    palentinoUno: imageSharp(id: {regex: "/palentino1/"}){
      sizes(maxWidth: 1200, quality:80, cropFocus: ENTROPY){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
    palentinoDos: imageSharp(id: {regex: "/palentino2/"}){
      sizes(maxWidth: 3840 cropFocus: ENTROPY){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
    palentinoTres: imageSharp(id: {regex: "/palentino3/"}){
      sizes(maxWidth: 3840, cropFocus: ENTROPY){
      ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`

export default DondeEstas;