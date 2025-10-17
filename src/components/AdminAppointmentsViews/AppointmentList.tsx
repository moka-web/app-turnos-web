import { useAppointmentStore } from "../../store/useAppointmentStore";
import type { AppointmentDataType } from "../../types/appointment.type";
import { AppointmentItemList } from "./AppointmentItemList";

export const AppointmentList = () => {
  // Aqui deberia mostrar la lista de turnos guardados en el localStorage
   const {appointments} = useAppointmentStore()


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
                id={appointment.id}
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

  



      
    </>
  );
};
