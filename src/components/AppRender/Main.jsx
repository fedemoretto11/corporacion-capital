import { Route, Routes } from "react-router-dom"
import Index from "../Pages/Index"

function Main() {
  return (
    <main id="main" className="flex">
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/" element=""></Route>
        <Route path="/" element=""></Route>
        <Route path="/" element=""></Route>
        <Route path="*" element="Error 404"></Route>
      </Routes>
    </main>
  )
}
export default Main