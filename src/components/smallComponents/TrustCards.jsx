import { Link } from "react-router-dom"

function TrustCards({ titulo, descripcion, link, boton }) {
  return (
    <article 
        className="h-[140px] lg:h-64 w-64 lg:w-2/6 bg-project-800 rounded-3xl flex flex-col justify-around items-center p-4"
      >
        <h4 
          className="text-acento text-center lg:text-2xl p-3 lg:h-2/6"
        >
          {titulo}
        </h4>
        <p 
          className="hidden text-project-100 lg:flex text-start text-lg p-3 lg:h-3/6"
        >
          {descripcion}
        </p>
        <Link 
          to={`/${link}`} 
          className="button-default w-40 lg:w-44 h-9 lg:h-10 flex justify-center items-center text-xs lg:text-base lg:self-end truncate"
        >
          {boton}
        </Link>
      </article>
  )
}
export default TrustCards