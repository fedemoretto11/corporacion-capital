import { useParams } from "react-router-dom"
import JobLoader from "../Loader/JobLoader"
import AplicarForm from "./AplicarForm"


function Aplicar({ job }) {


  
  return (
    !job
      ? <h4>Cargando</h4>
      : (
        <section 
          className="bg-project-50 flex flex-col w-full h-full p-8 gap-8"
        >
          <div 
            className="bg-project-200 flex flex-col w-full justify-start h-4/6 md:min-h-[300px] p-4"
          >
            <h3 
              className="text-acento text-2xl drop-shadow-md"
            >
              {job.title}
            </h3>
            <h5
              className="text-project-800 font-bold"
            >
              Acerca
            </h5>
            <p
              className="text-project-800"
            >{job.description}</p>
            <h5
              className="text-project-800 font-bold"
            >
              Requisitos
            </h5>
            <ul>
              {job?.skills.map((skill) =>{
                return (
                <li
                  className="text-project-800" 
                  key={skill}>{skill}
                </li>
                )})
              }
            </ul>
            <h5
              className="text-project-800 font-bold"
            >
              Lugar de trabajo
            </h5>
            <p
              className="text-project-800"
            >
              {job.isRemote ? "Trabajo remoto" : `${job.workLocation}`}
            </p>
            <h5
              className="text-project-800 font-bold"
            >
              Remuneracion
            </h5>
            <p
              className="text-project-800"
            >
              {job.paymentAmount.toLocaleString("es-AR",{style:"currency", currency:`${job.currency}`})}
            </p>
          </div>




          <div className="bg-project-900 p-8">
            <h3 className="text-2xl text-acento mb-4">Postularse al puesto</h3>
            <AplicarForm 
              job={job}
            />
          </div>
        </section>
      )
    )
}
export default Aplicar