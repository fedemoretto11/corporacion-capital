import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha"
import axios from 'axios';

function AplicarForm({ job }) {


  const nombre = useRef();
  const apellido = useRef();
  const email = useRef();
  const telefono = useRef();
  const linkedin = useRef();
  const portfolioOnline = useRef();
  const remuneracion = useRef();
  const cv = useRef();


  const  sendMail = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/send-email", {
        email: email.current.value,
        nombre: nombre.current.value,
        jobId: job.id
      });
      console.log("Respuesta del servidor:", response.data);


      nombre.current.value = "";
      apellido.current.value = "";
      email.current.value = "";
      telefono.current.value = "";
      linkedin.current.value = "";
      portfolioOnline.current.value = "";
      remuneracion.current.value = "";
      cv.current.value = "";

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  }

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="form-container w-full">
      <h5 className="text-center md:text-start text-white text-lg md:text-xl mx-8 px-8 pt-4">Completa los datos</h5>
      <form onSubmit={sendMail} className="form-container__form flex flex-col gap-2 p-8 m-8 mt-0" autoComplete="on">
        <div className="form-container__form__inputs grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nombre *" ref={nombre} required />
          <input type="text" placeholder="Apellido *" ref={apellido} required/>
          <input type="email" placeholder="Email *" ref={email} required/>
          <input type="number" placeholder="Telefono *" ref={telefono} required/>
          <input type="url" placeholder="URL Linkedin" ref={linkedin}/>
          <input type="url" placeholder="CV/Portfolio Online" ref={portfolioOnline}/>
          <input type="text" placeholder="Remuneracion pretendida" ref={remuneracion}/>
        </div>
        <div className="form-container__form__inputFile">
          <h6 className="text-white">CV</h6>
          <input type="file" name="" id="" accept=".pdf" className="w-full" ref={cv}/>
        </div>
        <div className="form-container__form__btnSend flex flex-col md:flex-row gap-4 justify-between items-center">
          <ReCAPTCHA
            sitekey="Your client site key"
            onChange={onChange}
          />
          <button type="submit" className="px-4 py-2 w-36 text-white">Enviar</button>
        </div>
      </form>
    </div>
  )
}
export default AplicarForm