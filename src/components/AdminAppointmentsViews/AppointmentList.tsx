import type { AppointmentDataType } from "../../types/appointment.type";
import { AppointmentItemList } from "./AppointmentItemList";

export const AppointmentList = () => {
  // Aqui deberia mostrar la lista de turnos guardados en el localStorage
  const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");

  console.log("turnos desde Appointment List", appointments);

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Turnos Agendados
      </h2>

      <div className="grid grid-cols-6 gap-4 bg-gray-100 p-2 rounded text-gray-600 font-medium sticky top-0 z-10">
        <div>Nombre</div>
        <div>Email</div>
        <div>Fecha</div>
        <div>Hora</div>
        <div>Servicio</div>
        <div>Acciones</div>
      </div>

      <div className=" overflow-y-scroll mx-auto bg-white  shadow-lg h-[70vh] border border-gray-300 p-6 mt-6  ">
        <ul className="divide-y divide-gray-200">
          {appointments?.map(
            (appointment: AppointmentDataType, index: number) => (
              <AppointmentItemList
                key={index}
                name={appointment.name}
                email={appointment.email}
                date={appointment.date}
                time={appointment.time}
                service={appointment.service}
              />
            )
          )}

          {appointments.length === 0 && (
            <li className="p-6 text-center text-gray-500">
              No hay turnos registrados.
            </li>
          )}
        </ul>
      </div>

      {/* Botón flotante */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={() => console.log("Abrir modal de agregar turno")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>



      
    </>
  );
};
