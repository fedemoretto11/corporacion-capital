import { addDoc, collection } from "firebase/firestore"
import { db } from "./data";

function Jobs() {

  let trabajo = {
    title: "Veterinario",
    description: "Se requiere experto veterinario para llevar el control de los animales de campo",
    isActive: true,
    company: {
      name: "Pichiman II",
      location:"Argentina",
      logo:"https://www.zarla.com/images/zarla-da-dcampo-1x1-2400x2400-20220131-bykydp8m7g3ddg6t7tbr.png?crop=1:1,smart&width=250&dpr=2"
    },
  workLocation: {
      isRemote: false,
      country: "Argentina",
      province: "Buenos Aires",
      city: "Maipu"
    },
    payment: {
      currency: "ARS",
      amount: 112000
    },              
    requirements: {
      skills : ["Veteriania", "quimica con los animales", "Ganas de laburar vagos"],
      requireHighSchool : true,
      degree: ["Veterinario"]
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