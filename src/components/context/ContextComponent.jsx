import { createContext, useState } from "react"
import { db } from "../../db/data"
import { collection } from "@firebase/firestore"

export const Contexto = createContext()
const Provider = Contexto.Provider

function ContextComponent(props) {

  const [jobId, setJobID] = useState("")

  const onSetJobID = (id) => {
    setJobID(id)
  }

  const guardarSolicitud = (datosSolicitante, job) => {
    // const solicitudCollection = collection(db,"solicitudes");
    const solicitud = {
      datosSolicitante, 
      job
    }
  }

  const contextObject = {
    jobId: jobId,
    onSetJobID: (id) => {
      onSetJobID(id)
    },
    onGuardarSolicitud: (datosSolicitante, job) => {
      guardarSolicitud(datosSolicitante, job)
    }
  }

  return (
    <Provider
      value={contextObject}
    >
      {props.children}
    </Provider>
  )
}
export default ContextComponent