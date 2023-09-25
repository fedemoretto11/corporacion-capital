import { useContext, useEffect, useState } from "react"
import { Contexto } from "../../context/ContextComponent"
import { Link } from "react-router-dom"
import JobLoader from "../../Loader/JobLoader"

function Job({ job }) {
  const { jobId, onSetJobID } = useContext(Contexto)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [job])



    return (
    
      !job
      ? <JobLoader isVisible={isVisible}/>
      : (
            <article className={`jobDetail w-full md:w-2/4 h-screen absolute lg:relative flex flex-col md:gap-8 top-[64px] ${isVisible ? "left-0" : "left-[800px]"} md:left-auto md:top-auto`}>

              <div className="jobDetail__resume w-full h-2/6 md:h-40 flex justify-center items-center">
                  <figure className="jobDetail__resume__figure w-2/6 h-full">
                    <img src={job.company.logo} alt={job.company.name} className="h-full object-contain"/>
                  </figure>
                  <div className="jobDetail__resume__text w-4/6 h-full flex flex-col justify-around items-center">
                    <div>
                      <h3 className="text-2xl text-center">{job.title}</h3>
                      <h6>{!job.workLocation.isRemote ? `${job.workLocation.city}, ${job.workLocation.province}, ${job.workLocation.country}` : "Remote" }</h6>
                    </div>
                    <div className="flex gap-4">
                      <button onClick={() => {setIsVisible(false)}} className="lg:hidden">Volver</button>
                      <Link to={`aplicar/${job.id}`} className="jobDetail__resume__text__btn text-xl">Aplicar</Link>  
                    </div>
                  </div>
              </div>



              <div className="jobDetail__details flex flex-col w-full justify-start h-4/6 md:h-[400px] p-4">
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
            </article>
          )
      )
  }
export default Job




