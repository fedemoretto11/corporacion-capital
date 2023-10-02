import { Link } from "react-router-dom"

function IndexCards() {
  return (
    <section className="indexCards w-screen flex flex-col md:flex-row justify-center lg:justify-around items-center p-6 gap-4 md:gap-12 lg:h-[494px]">

      <article className="indexCards__card h-[140px] lg:h-64 w-64 lg:w-2/6 flex flex-col justify-around items-center p-4">
        <h4 className="indexCards__card__title text-center lg:text-2xl p-3 lg:h-2/6">
          Encontra de manera fácil tu nuevo EMPLEO
        </h4>
        <p className="indexCards__card__text hidden lg:flex text-start text-lg p-3 lg:h-3/6">
          Contáctanos para encontrar las mejores soluciones integrales del mercado laboral
        </p>
        <Link to="/empleos" className="indexCards__card__btn w-40 lg:w-44 h-9 lg:h-10 flex justify-center items-center text-xs lg:text-base lg:self-end truncate">
          BUSCAR EMPLEO
        </Link>
      </article>

      <article className="indexCards__card h-[140px] lg:h-64 w-64 lg:w-2/6 flex flex-col justify-around items-center p-4">
        <h4 className="indexCards__card__title text-center lg:text-2xl p-3 lg:h-2/6">
          Soluciones para el EMPLEADOR
        </h4>
        <p className="indexCards__card__text hidden lg:flex text-start text-lg p-3 lg:h-3/6">
          Las mejores ofertas de empleo del mercado disponibles al alcance de un click
        </p>
        <Link to="/empleador" className="indexCards__card__btn w-40 lg:w-44 h-9 lg:h-10 flex justify-center items-center text-xs lg:text-base lg:self-end">
          CONTRATA
        </Link>
      </article>

    </section>
  )
}
export default IndexCards