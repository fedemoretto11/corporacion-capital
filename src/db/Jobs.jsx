import { addDoc, collection } from "firebase/firestore"
import { db } from "./data";

function Jobs() {

  let trabajo = {
    title: "Sofware Developer",
    description: "Se requiere experto software developer para realizar una app de escritorio desde 0, se requiere extenso conocimineto en Java",
    isActive: true,
    isRemote: true,
    workLocation: "Maipu, Buenos Aires, Argentina",
    currency: "USD",
    paymentAmount: 11000,
    skills : ["Java", "SpringBoot", "MySQL", "JPA"],
    degree: [],
    company: {
      name: "Le Softaré",
      location:"Argentina",
      logo:"https://www.zarla.com/images/zarla-da-dcampo-1x1-2400x2400-20220131-bykydp8m7g3ddg6t7tbr.png?crop=1:1,smart&width=250&dpr=2"
    },            
    offers: ["osde", "comida", "reloj mensual para no llegar tarde"]
  }        

  const agregarDB = () => {
    const docAdded = addDoc(collection(db,"jobs"), trabajo);
    docAdded
      .then(rta => {
        alert("Producto agregado")
      })
      .catch(err => {
        alert("Error")
      })
  }
  

  return (
    <div>
      <button onClick={agregarDB} className="btn border-2 border-black m-4 p-4 hover:bg-blue-200"> Agregar a la base de datos</button>
    </div>
  )
}
export default Jobs