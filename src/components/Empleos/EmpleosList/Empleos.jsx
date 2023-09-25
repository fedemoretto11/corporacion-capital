import { useContext } from "react"
import { Link } from "react-router-dom"
import { Contexto } from "../../context/ContextComponent"




function Empleos({ job }) {

  const { jobId, onSetJobID } = useContext(Contexto)



  return (
    <article onClick={() => onSetJobID(job.id)} className="job flex flex-col md:flex-row justify-around lg:justify-center items-start p-4 h-52 md:h-48 w-full lg:w-[550px] cursor-pointer">
      <figure className="job__logo flex justify-around md:block md:h-2 w-full md:w-1/6 lg:w-32 md:pt-12 gap-3">
        <img src={job.company.logo} alt={job.company.name} className="w-1/4 md:w-full" />
        <h3 className="job__text__title text-lg md:hidden">{job.title}</h3>
      </figure>

      <div className="job__text flex flex-col justify-start text-center gap-4 md:w-5/6">
        <h3 className="job__text__title hidden md:block text-xl">{job.title}</h3>
        <p className="text-white text-sm">{job.description}</p>
      </div>
    </article>
  )
}
export default Empleos