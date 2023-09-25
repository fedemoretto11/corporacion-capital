import { createContext, useState } from "react"

export const Contexto = createContext()
const Provider = Contexto.Provider

function ContextComponent(props) {

  const [jobId, setJobID] = useState("")

  const onSetJobID = (id) => {
    setJobID(id)
  }

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