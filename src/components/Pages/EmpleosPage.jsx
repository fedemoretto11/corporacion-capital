import { useState } from "react";
import JobContainer from "../Empleos/Job/JobContainer";
import EmpleosListContainer from "../Empleos/EmpleosList/EmpleosListContainer";

function EmpleosPage() {


  return (
    <section 
      className="empleosContainer bg-project-100 flex flex-col lg:flex-row p-8 justify-center items-start gap-8 w-screen"
    >
      <EmpleosListContainer />
      <JobContainer />
    </section>
  )
}
export default EmpleosPage
