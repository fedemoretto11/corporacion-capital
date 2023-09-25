import emiliano from '../../assets/emiliano-con-estilo.jpg'

function EquipoMember({ member }) {
  return (
    <article className="member flex flex-col md:flex-row justify-center items-center gap-4 p-8 rounded-2xl">
      <figure className='hidden md:flex md:w-2/6'>
        <img src={emiliano} alt={member.name} />
      </figure>
      <div className="member__text text-center flex flex-col justify-start h-full gap-1 md:w-4/6">
        <h3 className='member__text__title text-xl md:text-3xl'>{member.name}</h3>
        <h4 className='member__text__position md:text-xl'>{member.position}</h4>
        <p className='member__text__description hidden md:block'>{member.description}</p>
      </div>
      <figure className='md:hidden'>
        <img src={emiliano} alt={member.name} />
      </figure>
    </article>
  )
}
export default EquipoMember