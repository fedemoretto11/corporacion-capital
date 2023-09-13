import SocialLinks from "../smallComponents/SocialLinks"

function Footer() {
  return (
    <footer className="footer w-screen h-64 flex flex-col justify-center items-center gap-8">
      <h3 className="footer__title text-2xl text-white">Corporacion Capital</h3>
      <SocialLinks />
      <div className="footer__copyright flex flex-col justify-center items-center">
        <p className="text-white">Copyright &#169; 2020 - {new Date().getFullYear()} Corporacion Capital</p>
        <p className="text-white">Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
export default Footer