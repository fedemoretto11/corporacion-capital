import { useContext, useEffect, useState } from "react"
import { Contexto } from "../../context/ContextComponent"
import { Link } from "react-router-dom"
import JobLoader from "../../Loader/JobLoader"
import JobResume from "../../smallComponents/JobResume"
import JobDetail from "../../smallComponents/JobDetail"

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
          <article 
            className={`w-full md:w-2/4 h-screen absolute lg:relative flex flex-col md:gap-8 top-[64px] ${isVisible ? "left-0" : "left-[800px]"} md:left-auto md:top-auto transition-600`}
          >
            <JobResume 
              job={job}
            />
            <JobDetail
              job={job}
            />
          </article>
        )
      )
  }
export default Job




