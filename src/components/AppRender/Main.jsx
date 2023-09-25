import { Route, Routes } from "react-router-dom"
import Index from "../Pages/Index"
import Nosotros from "../Pages/Nosotros"
import EmpleosPage from "../Pages/EmpleosPage"
import AplicarContainer from "../Aplicar/AplicarContainer"
import Jobs from "../../db/jobs"

function Main() {

  
  return (
    <main id="main" className="flex">
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/empleos" element={<EmpleosPage />}></Route>
        <Route path="/empleos/aplicar/:id" element={<AplicarContainer />}></Route>
        <Route path="/comunidad" element={<Jobs />}></Route>
        <Route path="/empleador" element=""></Route>
        <Route path="*" element="Error 404"></Route>
      </Routes>
    </main>
  )
}
export default Main