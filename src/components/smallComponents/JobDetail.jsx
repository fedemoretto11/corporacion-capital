


function JobDetail({ job }) {
  return (
    <div 
      className="bg-project-200 flex flex-col w-full justify-start h-4/6 md:h-[400px] p-4"
    >
      <h5
        className="text-project-800 font-bold"
      >
        Acerca
      </h5>
      <p
        className="text-project-800"
      >
        {job.description}
      </p>
      <h5
        className="text-project-800 font-bold"
      >Requisitos</h5>
      <ul>
        {job.skills.map((skill) =>{
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
      >Lugar de trabajo</h5>
      <p
        className="text-project-800"
      >{job.isRemote ? "Trabajo remoto" : `${job.workLocation}`}</p>
      <h5
        className="text-project-800 font-bold"
      >Remuneracion</h5>
      <p
        className="text-project-800"
      >{job.paymentAmount.toLocaleString("es-AR",{style:"currency", currency:`${job.currency}`})}</p>
    </div>
  )
}
export default JobDetail