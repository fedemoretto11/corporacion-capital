import SocialLinks from "../smallComponents/SocialLinks"

function Footer() {
  return (
    <footer className="w-screen h-64 bg-project-800 flex flex-col justify-center items-center gap-8">
      <h3 className="text-2xl text-project-50">Corporacion Capital</h3>
      <SocialLinks />
      <div className="flex flex-col justify-center items-center">
        <p 
          className="text-project-50"
        >
          Copyright &#169; 2022 - {new Date().getFullYear()} Corporacion Capital
        </p>
        <p 
          className="text-project-50"
        >
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
export default Footer