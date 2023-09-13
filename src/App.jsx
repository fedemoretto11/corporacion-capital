import { BrowserRouter } from "react-router-dom"
import Header from "./components/AppRender/Header"
import Main from "./components/AppRender/Main"
import Footer from "./components/AppRender/Footer"

function App() {

  return (
      <BrowserRouter>  
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
  )
}

export default App
