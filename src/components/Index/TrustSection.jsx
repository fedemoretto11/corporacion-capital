function TrustSection() {
  return (
    <section 
      className="bg-project-100 text-project-800 flex flex-col justify-center items-center w-full h-[494px] p-8 gap-4"
    >
      <h4 className="text-center text-3xl md:w-2/4 lg:w-2/4">
        Empresas TOP que confian en nuestros servicios
      </h4>
      <p className="text-center text-xl md:w-2/4 lg:w-2/4">
        Hemos ayudado a empresas a que puedan encontrar candidatos calificados para sus empleos con nuestras soluciones en Recursos Humanos
      </p>
      <div className="flex justify-center items-center gap-10 md:w-2/4 lg:w-2/4">
        <i 
          class="bi bi-facebook text-4xl"
          ></i>
        <i 
          class="bi bi-linkedin text-4xl"
          ></i>
        <i 
          class="bi bi-twitter text-4xl"
          ></i>
        <i 
          class="bi bi-amazon text-4xl"
          ></i>
        <i 
          class="bi bi-playstation text-4xl"
          ></i>
      </div>
    </section>
  )
}
export default TrustSection