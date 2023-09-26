import { useParams } from "react-router-dom"
import JobLoader from "../Loader/JobLoader"
import AplicarForm from "./AplicarForm"


function Aplicar({ job }) {


  
  return (
    !job
      ? <h4>Cargando</h4>
      : (
        <section className="aplicar flex flex-col w-full h-full p-8 gap-8">
          <div className="jobDetail__details flex flex-col w-full justify-start h-4/6 md:h-[300px] p-4">
            <h3 className="jobDetail__details__title text-xl">{job.title}</h3>
            <h5>Acerca</h5>
            <p>{job.description}</p>
            <h5>Requisitos</h5>
            <ul>
              {job.requirements.skills.map((skill) =>{
                return (
                <li key={skill}>{skill}</li>
                )})
              }
            </ul>
            <h5>Lugar de trabajo</h5>
            <p>{job.workLocation.isRemote ? "Trabajo remoto" : `${job.workLocation.city}, ${job.workLocation.country}`}</p>
            <h5>Remuneracion</h5>
            <p>{job.payment.amount.toLocaleString("es-AR",{style:"currency", currency:`${job.payment.currency}`})}</p>
          </div>
          <div className="form p-8">
            <h3 className="text-2xl mb-4">Postularse al puesto</h3>
            <AplicarForm />
          </div>
        </section>
      )
    )
}
export default Aplicar