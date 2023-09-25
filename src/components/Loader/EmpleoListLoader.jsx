import EmpleoLoader from "./LoadersComponents/EmpleoLoader"

function EmpleoListLoader() {
  return (
    <article className="job flex flex-col md:flex-row justify-around lg:justify-center items-start p-2 h-52 md:h-48 w-full lg:w-[550px] cursor-pointer">
      <EmpleoLoader />
    </article>
  )
}
export default EmpleoListLoader