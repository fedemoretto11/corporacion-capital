import EquipoList from "./EquipoList"

function EquipoContainer() {


  const hardcodeTeam = [{
    name: "Emiliano Albaitero",
    position: "Chief Executive Manager - Founder",
    description: "Con una titulación de Licenciado en Recursos Humanos obtenida en la Facultad de Ciencias Económicas de la Universidad FASTA de Mar del Plata, tomé la decisión de establecer en el año 2022 Corporación Capital. Esta empresa tiene como enfoque principal la provisión de soluciones integrales para las problemáticas sustanciales que afectan tanto a los colaboradores como a los empleadores en relación al acceso al mercado laboral."
  },
  {
    name: "Federico Moretto",
    position: "Chief Financial Manager",
    description: "La empresa dio un salto de calidad con la contratacion de esta persona. Crecio un 324% en tan solo 18 dias. Todos gracias a un increible sex appeal."
  }]





  return (
    <>
      <EquipoList 
        team={hardcodeTeam}
      />
    </>
  )
}
export default EquipoContainer