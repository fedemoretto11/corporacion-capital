import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../db/data"
import EmpleosList from "./EmpleosList"




function EmpleosListContainer() {

  const [jobs, setJobs] = useState()

  useEffect(() => {
    const jobsCollection = collection(db, "jobs")
    let queryFilter = jobsCollection;
    const jobsList = getDocs(queryFilter)
    jobsList
      .then((jobsData) => {
        let mappedJob = jobsData.docs.map((job) => {
          return {id:job.id, ...job.data()}
        })
        setJobs(mappedJob)
      })
      .catch((err) => {
        console.error(err, "error")
      })

  }, [])



  return (
    <>
      <EmpleosList
        jobs={jobs}
      />
    </>
  )
}
export default EmpleosListContainer