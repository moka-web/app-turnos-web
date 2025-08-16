import { Link } from "react-router"
// import { AppointmentForm } from "../components/AppointmentForm"



export const Home = () => {
  return (


    <section className="flex  h-screen">
      
      <div className="flex flex-col items-center justify-center h-screen  bg-gray-100 p-10 w-[30%]">
      
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">This is a simple React application using Vite and Tailwind CSS.</p>
      
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-10 w-[70%]">
        <h2 className="text-4xl font-bold mb-4" > Reserva Tu Turno Online! </h2>
         <br />
         <hr />
         <br />
        <div className="flex items-center justify-around bg-white p-6 rounded-lg shadow-md w-full">

            {/* esto deberia redirigir a una page y no mostrar directamente el formulario , posteriormente deberia mostrarse el listado de turnos disponibles */}

           {/* <AppointmentForm  />  */}
          

          <Link to={"agendar"} className=" rounded bg-blue-300 text-white font-bold p-4"> Agenda tu Turno</Link>

        </div>


      </div>


    </section>
  )
}
        