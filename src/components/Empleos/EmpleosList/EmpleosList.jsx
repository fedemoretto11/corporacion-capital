import EmpleoListLoader from "../../Loader/EmpleoListLoader"
import Empleos from "./Empleos"







function EmpleosList({ jobs }) {
  return (
    
    !jobs
    ? <EmpleoListLoader />
    : (

      <section className="jobs_list flex flex-col h-full overflow-y-scroll">
      {jobs.map((job) => {
        if (job.isActive) {
          return (
              <Empleos
                key={ job.id }
                job={ job }
              />
            )
          }
      })}
      </section>

    )

  )
}
export default EmpleosList