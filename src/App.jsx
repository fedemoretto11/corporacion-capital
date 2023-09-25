import { BrowserRouter } from "react-router-dom"
import Header from "./components/AppRender/Header"
import Main from "./components/AppRender/Main"
import Footer from "./components/AppRender/Footer"
import ContextComponent from "./components/context/ContextComponent"

function App() {

  return (

      <BrowserRouter>
        <ContextComponent>
          <Header />
          <Main />
          <Footer />
        </ContextComponent>
      </BrowserRouter>
  )
}

export default App
