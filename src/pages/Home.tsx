import { AppointmentForm } from "../components/AppointmentForm"
import { AppointmentList } from "../components/AppointmentList"
import { Nav } from "../components/Nav"


export const Home = () => {
  return (
    <>
      <Nav />

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">This is a simple React application using Vite and Tailwind CSS.</p>
      
      </div>


      <section className="flex flex-col items-center justify-center h-screen bg-gray-200 p-10 ">

        <h2 className="text-4xl font-bold mb-4" > Reserva Tu Turno Online! </h2>
         <br />
         <hr />
         <br />
        
        <div className="flex items-center justify-around bg-white p-6 rounded-lg shadow-md w-full">

          <AppointmentForm  /> 
          
          <AppointmentList /> 

        </div>


      </section>


    </>
  )
}
        