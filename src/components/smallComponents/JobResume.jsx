import { Link } from "react-router-dom"

function JobResume({ job }) {
  return (
    <div 
      className="w-full h-2/6 md:h-40 bg-project-900 border-t-[1px] border-project-400 flex justify-center items-center"
    >
      <figure 
        className="w-2/6 h-full"
      >
        <img 
          src={job.company.logo} 
          alt={job.company.name} 
          className="h-full object-contain"
        />
      </figure>
      <div 
        className="w-4/6 h-full flex flex-col justify-around items-center"
      >
        <div>
          <h3 
            className="text-2xl text-center text-acento"
          >
            {job.title}
          </h3>
          <h6 
            className="text-project-300"
          >
            {!job.isRemote ? `${job.workLocation}` : "Remote" }
          </h6>
        </div>
        <div 
          className="flex gap-4"
        >
          <button 
            onClick={() => {setIsVisible(false)}} 
            className="lg:hidden"
          >
            Volver
          </button>
          <Link 
            to={`aplicar/${job.id}`} 
            className="text-xl text-project-50 duration-300 hover:text-acento"
          >
            Aplicar
          </Link>  
        </div>
      </div>
  </div>
  )
}
export default JobResume