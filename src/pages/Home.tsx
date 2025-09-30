import { AppointmentManager } from "../components/Appointments/AppointmentManager.tsx";

// import { AppointmentForm } from "../components/AppointmentForm"

export const Home = () => {
  return (
    <section className="flex  h-screen">
      <div className="flex flex-col items-center justify-center h-screen  bg-gray-100 p-10 w-[30%]">
        <h1 className="text-4xl font-bold mb-4">Agenda tu turno! </h1>
       
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-10 w-[70%]">
        <div className="flex items-center justify-around bg-white p-6 rounded-lg shadow-md w-full">
          {/* a este componente deberian llegarle los datos de los turnos desde el context */}

          <div>
            <AppointmentManager />
          </div>
        </div>
      </div>
    </section>
  );
};
