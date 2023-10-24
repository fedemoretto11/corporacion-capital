import { Link } from "react-router-dom"
import TrustCards from "../smallComponents/TrustCards"

function IndexCards() {
  return (
    <section 
      className="bg-project-300 w-screen flex flex-col md:flex-row justify-center lg:justify-around items-center p-4 gap-4 md:gap-8 lg:h-[400px]"
    >
      <TrustCards
        titulo="Soluciones para el EMPLEADOR"
        descripcion="Las mejores ofertas de empleo del mercado disponibles al alcance de un click"
        link="empleador"
        boton="BUSCAR EMPLEO"
      />
      <TrustCards
        titulo="Encontra de manera fácil tu nuevo EMPLEO"
        descripcion="Contáctanos para encontrar las mejores soluciones integrales del mercado laboral"
        link="empleos"
        boton="CONTRATA"
      />

    </section>
  )
}
export default IndexCards