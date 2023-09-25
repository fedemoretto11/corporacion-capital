import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../db/data"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Aplicar from "./Aplicar";

function AplicarContainer() {


  const params = useParams();
  const jobId = params.id;

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
      <Aplicar
        jobId={jobId}
      />
    </>
  )
}
export default AplicarContainer