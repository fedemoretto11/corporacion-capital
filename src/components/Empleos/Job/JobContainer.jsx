import { collection, doc, getDoc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../../db/data"
import Job from "./Job"
import { Contexto } from "../../context/ContextComponent"

function JobContainer() {

  const { jobId, onSetJobID } = useContext(Contexto)

  const [job,setJob] = useState()
  

  useEffect(() => {
    if (jobId) {
      const jobsCollection = collection(db, "jobs")
      const jobReference = doc(jobsCollection, jobId)
      const jobData = getDoc(jobReference)
  
      jobData
        .then((result) => {
          setJob({id:result.id, ...result.data()})
        })
        .catch((err) => {
          console.error(err, "hubo un gran mistake")
        })

    }
  },[jobId])




  return (
    <>
      <Job
        job={job}
      />
    </>
  )
}
export default JobContainer