import { Link } from "react-router-dom"
import foto from '../../assets/emilianoSerio.jpg'

function Hero() {
  return (
    <section className="hero w-screen flex justify-start items-center px-8 lg:px-16">
      <article className="hero__text flex flex-col justify-center items-center w-3/4 md:w-[340px] lg:w-2/4">
        <div className="hero__text__title w-full lg:w-3/4 h-3/6 flex justify-center items-center p-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-center p-4">
            Encontra el trabajo que estabas buscando
          </h3>
        </div>
        <div className="hero__text__description w-full lg:w-3/4 h-2/6 flex justify-center items-center p-4">
          <p className="text-center text-white p-4">
            Acceder a las mejores oportunidades laborales del mercado nunca fue tan sencillo como hacer clic, ya que con solo un simple toque en tu dispositivo, puedes descubrir una amplia gama de ofertas de empleo disponibles y a tu alcance.
          </p>
        </div>
        <div className="hero__text__button  w-full lg:w-3/4 h-1/6 flex justify-center items-center p-4">
            <Link to="/empleos" className="hero__text__button__btn w-44 h-8 md:h-10 flex justify-center items-center gap-4">
              Explora 
              <i class="bi bi-arrow-right"></i>
            </Link>
        </div>
      </article>
      {/* <figure className="hero__image hidden lg:flex h-full w-2/4 p-24">
        <img src={foto} alt="" className="object-cover"/>
      </figure> */}
    </section>
  )
}
export default Hero