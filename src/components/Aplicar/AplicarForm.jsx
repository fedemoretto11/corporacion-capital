import ReCAPTCHA from "react-google-recaptcha"



function AplicarForm() {

  function onChange(value) {
    console.log("Captcha value:", value);
  }


  return (
    <div className="form-container w-full">
      <h5 className="text-center md:text-start text-white text-lg md:text-xl mx-8 px-8 pt-4">Completa los datos</h5>
      <form className="form-container__form flex flex-col gap-2 p-8 m-8 mt-0">
        <div className="form-container__form__inputs grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nombre *" required/>
          <input type="text" placeholder="Apellido *" required/>
          <input type="email" placeholder="Email *" required/>
          <input type="number" placeholder="Telefono *" required/>
          <input type="url" placeholder="URL Linkedin"/>
          <input type="url" placeholder="CV/Portfolio Online"/>
          <input type="text" placeholder="Remuneracion pretendida"/>
        </div>
        <div className="form-container__form__inputFile">
          <h6 className="text-white">CV</h6>
          <input type="file" name="" id="" accept=".pdf" className="w-full"/>
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