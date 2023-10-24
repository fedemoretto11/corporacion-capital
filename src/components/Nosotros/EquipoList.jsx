import EquipoMember from "./EquipoMember"

function EquipoList( { team } ) {

  console.log(team)

  return (
      
      team.length == 0
      ? <h4>Cargando</h4> 
      :
      (
        <section className="bg-project-300 grid grid-cols-1 xl:grid-cols-2 gap-8 p-16">
          {team.map((member) => {
            return (
              <EquipoMember 
                key={member.name}
                member={member}
              />
            )
          })}
        </section>
      )
  )
}
export default EquipoList