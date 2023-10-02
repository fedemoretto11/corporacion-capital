import { Route, Routes } from "react-router-dom"
import Index from "../Pages/Index"
import EmpleosPage from "../Pages/EmpleosPage"
import AplicarContainer from "../Aplicar/AplicarContainer"
import Jobs from "../../db/jobs"
import Error404 from "../Error/Error404"

function Main() {

  
  return (
    <main id="main" className="flex">
      <Routes>
        {/* <Route path="/" element={<EmpleosPage />}></Route> */}
        {/* <Route path="/nosotros" element={<Nosotros />}></Route> */}
        <Route path="/empleos" element={<EmpleosPage />}></Route>
        <Route path="/empleos/aplicar/:id" element={<AplicarContainer />}></Route>
        <Route path="/agregarEmpleo" element={<Jobs />}></Route>
        {/* <Route path="/empleador" element=""></Route> */}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </main>
  )
}
export default Main