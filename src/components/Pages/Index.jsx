import Hero from "../Index/Hero"
import IndexCards from "../Index/IndexCards"
import TrustSection from "../Index/TrustSection"

function Index() {
  return (
    <section className="flex flex-col">
      <Hero />
      <TrustSection />
      <IndexCards />
    </section>
  )
}
export default Index