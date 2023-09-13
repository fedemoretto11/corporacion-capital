import { Link } from "react-router-dom"

function IndexCards() {
  return (
    <section className="indexCards w-screen flex flex-col md:flex-row justify-center items-center p-6 gap-4">
      <article className="indexCards__card h-[140px] lg:h-64 w-3/4 md:w-2/6 lg:w-2/6 flex flex-col justify-around items-center p-4">
        <h4 className="indexCards__card__title text-center lg:text-2xl p-3">Encontra de manera fácil tu nuevo EMPLEO</h4>
        <p className="indexCards__card__text hidden lg:flex text-start text-lg p-3">Contáctanos para encontrar las mejores soluciones integrales del mercado laboral</p>
        <Link to="/" className="indexCards__card__btn w-3/4 lg:w-32 h-3/6 lg:h-10 flex justify-center items-center text-xs self-end truncate">BUSCAR EMPLEO</Link>
      </article>
      <article className="indexCards__card h-[140px] lg:h-64 w-3/4 md:w-2/6 lg:w-2/6 flex flex-col justify-around items-center p-4">
        <h4 className="indexCards__card__title text-center lg:text-2xl p-3">Soluciones para el EMPLEADOR</h4>
        <p className="indexCards__card__text hidden lg:flex text-start text-lg p-3">Las mejores ofertas de empleo del mercado disponibles al alcance de un click</p>
        <Link to="/" className="indexCards__card__btn w-3/4 lg:w-32 h-3/6 lg:h-10 flex justify-center items-center text-xs self-end">CONTRATA</Link>
      </article>
    </section>
  )
}
export default IndexCards