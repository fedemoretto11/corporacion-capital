import { useParams } from "react-router-dom"


function Aplicar() {

  const params = useParams();

  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  )
}
export default Aplicar