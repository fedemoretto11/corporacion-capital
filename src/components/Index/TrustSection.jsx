function TrustSection() {
  return (
    <section className="trust flex flex-col justify-center items-center w-full h-[494px] p-8 gap-4">
      <h4 className="text-center text-3xl md:w-2/4 lg:w-2/4">
        Empresas TOP que confian en nuestros servicios
      </h4>
      <p className="text-center text-regular md:w-2/4 lg:w-2/4">
        Hemos ayudado a empresas a que puedan encontrar candidatos calificados para sus empleos con nuestras soluciones en Recursos Humanos
      </p>
      <div className="trust__logos flex justify-center items-center gap-4 md:w-2/4 lg:w-2/4">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-linkedin"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-amazon"></i>
        <i class="bi bi-playstation"></i>
      </div>
    </section>
  )
}
export default TrustSection