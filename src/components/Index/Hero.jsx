import { Link } from "react-router-dom"
import foto from '../../assets/emilianoSerio.jpg'

function Hero() {
  return (
    <section className="hero w-screen flex justify-around items-center p-8">
      <article className="hero__text w-3/4 md:w-[340px] h-[480px]">
        <div className="hero__text__title w-full h-3/6 flex justify-center items-center">
          <h3 className="text-4xl text-center p-4">Obtén asistencia de reclutamiento al instante</h3>
        </div>
        <div className="hero__text__description w-full h-2/6 flex justify-center items-center">
          <p className="text-center text-white p-4">Tenemos todas las soluciones de reclutamiento al instante que necesitas para contratar a los mejores talentos y ahorrar dinero al mismo tiempo</p>
        </div>
        <div className="hero__text__button  w-full h-1/6 flex justify-center items-center">
            <Link to="/" className="hero__text__button__btn w-2/4 h-2/4 flex justify-center items-center gap-4">Explora <i class="bi bi-arrow-right"></i></Link>
        </div>
      </article>
      <figure className="hero__image hidden lg:flex h-full w-[540px] p-24">
        <img src={foto} alt="" className="objetct-cover"/>
      </figure>
    </section>
  )
}
export default Hero