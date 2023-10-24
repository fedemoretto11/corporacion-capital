import emiliano from '../../assets/emiliano-con-estilo.jpg'

function EquipoMember({ member }) {
  return (
    <article 
      className="bg-project-900 flex flex-col md:flex-row justify-center items-center gap-4 p-8 rounded-2xl"
    >
      <figure 
        className='hidden md:flex md:w-2/6'
      >
        <img 
          src={emiliano} 
          alt={member.name} 
        />
      </figure>
      <div 
        className="text-acento text-center flex flex-col justify-start h-full gap-1 md:w-4/6"
      >
        <h3 
          className='text-xl md:text-3xl'
        >
          {member.name}
        </h3>
        <h4 
          className='md:text-xl'
        >
          {member.position}
        </h4>
        <p 
          className='text-project-50 hidden md:block'
        >
          {member.description}
        </p>
      </div>
      <figure 
        className='md:hidden'
      >
        <img 
          src={emiliano} 
          alt={member.name} 
        />
      </figure>
    </article>
  )
}
export default EquipoMember