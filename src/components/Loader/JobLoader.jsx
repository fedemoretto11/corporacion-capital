import JobDescription from "./LoadersComponents/JobDescription"
function JobLoader({ isVisible }) {
  return (
        <article className={`jobDetail w-full md:w-2/4 h-screen absolute lg:relative flex flex-col md:gap-8 top-[64px] ${!isVisible ? "left-0" : "left-[800px]"} md:left-auto md:top-auto`}>
          <div className="jobDetail__resume w-full h-2/6 md:h-40 flex justify-center items-center p-4">
            <h3 className="text-white text-xl">Seleccione un empleo de la lista de la izquierda</h3>
          </div>
          <div className="jobDetail__details flex flex-col w-full justify-start h-4/6 md:h-[400px] p-4">
            <JobDescription />
          </div>
        </article>
  )
}
export default JobLoader