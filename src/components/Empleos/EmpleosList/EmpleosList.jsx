import EmpleoListLoader from "../../Loader/EmpleoListLoader"
import Empleos from "./Empleos"







function EmpleosList({ jobs }) {
  return (
    
    !jobs
    ? <EmpleoListLoader />
    : (

      <section className="flex flex-col h-full">
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