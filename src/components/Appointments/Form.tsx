import { useAppointmentStore } from "../../store/useAppointmentStore";
import type { calendarFormProps } from "../../types/calendarFormProps.type";

//hacer un custom Hook AQUI

export const FormComponent = ({
  selectedSlot,
  setSelectedSlot

}: calendarFormProps ) => {
  
  const { addAppointment } = useAppointmentStore();



  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const form = e.currentTarget;

    const data = {
    
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      date: (form.elements.namedItem("date") as HTMLInputElement)?.value,
      time: (form.elements.namedItem("time") as HTMLInputElement)?.value,
      service: (form.elements.namedItem("service") as HTMLInputElement)?.value,
      id: crypto.randomUUID(),
    
    };

    if (

      !data.name ||
      !data.email ||
      !data.date ||
      !data.time ||
      !data.service

    ) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }

    addAppointment(data);
    setSelectedSlot(null); // cerrar modal


  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Agregar turno</h3>

        <form className="flex flex-col justify-around" onSubmit={HandleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            name="name"
            className="border-2 border-gray-600 m-2 p-2 rounded"
            type="text"
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            className="border-2 border-gray-600 m-2 p-2 rounded"
            type="email"
          />

          <label htmlFor="date">Fecha</label>
          <input
            name="date"
            className="border-2 border-gray-600 m-2 p-2 rounded"
            type="date"
            defaultValue={selectedSlot?.start.toISOString().split("T")[0]}
          />

          <label htmlFor="time">Horario</label>
          <input
            name="time"
            className="border-2 border-gray-600 m-2 p-2 rounded"
            type="time"
            defaultValue={selectedSlot?.start
              .toISOString()
              .split("T")[1]
              .slice(0, 5)}
          />

          <label htmlFor="service">Servicio</label>
      
          <select name="service"  className="border-2 border-gray-600 m-2 p-2 rounded" >
            
              <option value="lavado">lavado</option>
              <option value="tapizados">tapizados </option>
              <option value="tratamiento">tratamiento</option>

          </select>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => setSelectedSlot(null)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
