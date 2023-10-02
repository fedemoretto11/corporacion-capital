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

  // const guardarSolicitud = (nombre, apellido, email, telefono, linkedin, cvOnline, remuneracion) => {
  //   const solicitudCollection = collection(db,"solicitudes");
  //   const solicitud = {
  //     nombre: nombre,
  //     apeliido: apellido,
  //     email: email,
  //     telefono: telefono,
  //     linkedin: linkedin,
  //     cvOnline: cvOnline,
  //     remuneracion: remuneracion
  //   }
  // }

  const contextObject = {
    jobId: jobId,
    onSetJobID: (id) => {
      onSetJobID(id)
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