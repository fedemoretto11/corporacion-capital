import { useRef } from "react";

function AplicarForm({ job }) {


  const nombre = useRef();
  const apellido = useRef();
  const email = useRef();
  const telefono = useRef();
  const linkedin = useRef();
  const portfolioOnline = useRef();
  const remuneracion = useRef();
  const cv = useRef();


  return (
    <div className="form-container w-full">
      <h5 className="text-center md:text-start text-white text-lg md:text-xl mx-8 px-8 pt-4">Completa los datos</h5>
      <form className="form-container__form flex flex-col gap-2 p-8 mx-8" action="https://formsubmit.co/fedecuervosl@gmail.com" method="POST" enctype="multipart/form-data">
        <div className="form-container__form__inputs grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Nombre *" 
            ref={nombre} 
            name="Nombre"
            required 
          />
          <input 
            type="text" 
            placeholder="Apellido *" 
            ref={apellido} 
            name="Apellido"
            required
          />
          <input 
            type="email" 
            placeholder="Email *" 
            ref={email} 
            name="Email"
            required
          />
          <input 
            type="number" 
            placeholder="Telefono *" 
            ref={telefono} 
            name="Telefono"
            // required
          />
          <input 
            type="url" 
            placeholder="URL Linkedin" 
            name="Likedin"
            ref={linkedin}
          />
          <input 
            type="url" 
            placeholder="CV/Portfolio Online" 
            name="CV Online / Portfolio"
            ref={portfolioOnline}
          />
          <input 
            type="text" 
            placeholder="Remuneracion pretendida" 
            name="Remuneracion Pretendida"
            ref={remuneracion}
          />
        </div>
        <div className="form-container__form__inputFile">
          <h6 className="text-white">CV</h6>
          <input 
            type="file" 
            name="cv" 
            id="" 
            accept=".pdf" 
            className="w-full" 
            ref={cv}
          />
        </div>
        <div className="form-container__form__btnSend flex flex-col md:flex-row gap-4 mt-4 justify-between items-center">
          <button type="submit" className="px-4 py-2 w-36 text-white">Enviar</button>
        </div>
        <input 
          type="hidden" 
          name="_subject" 
          value={`${job.title} || ${job.company.name}`} 
        />
        <input 
          type="hidden" 
          name="_next" 
          value="http://localhost:5173/empleos"
        />
      </form>
    </div>
  )
}
export default AplicarForm