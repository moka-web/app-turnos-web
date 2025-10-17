import { useState } from "react";
import { AppointmentForm } from "./AppointmentForm";
import { AppointmentCalendar } from "./AppointmentCalendar";
import { useAppointmentStore } from "../../store/useAppointmentStore";

export const AppointmentManager = () => {

    // store
  const {appointments} = useAppointmentStore();

  //esto tambien se puede mandar al store 
  
  const [selectedSlot, setSelectedSlot] = useState<{
    start: Date;
    end: Date;
  } | null>(null);



  // Función que se pasa al calendario
  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    setSelectedSlot({ start, end });
  };




  return (
    <>
      <AppointmentCalendar
        appointments={appointments}
        onSelectSlot={handleSelectSlot}
      />

      <AppointmentForm
        selectedSlot={selectedSlot} // slot seleccionado desde calendario
        setSelectedSlot={setSelectedSlot} // para cerrar modal
        appointments={appointments}
   
      />
    </>
  );
};
