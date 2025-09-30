import React from "react";
import type { AppointmentDataType } from "../../types/appointment.type";
import { useState } from "react";
import { AppointmentForm } from "./AppointmentForm";
import { AppointmentCalendar } from "./AppointmentCalendar";

export const AppointmentManager = () => {
  const [appointments, setAppointments] = useState<AppointmentDataType[]>([]);

  const [selectedSlot, setSelectedSlot] = useState< {start: Date;end: Date;} | null> (null);

  // Función que se pasa al calendario
  const handleSelectSlot = ( { start, end }: { start: Date; end: Date }) => {
    setSelectedSlot({ start, end });
  };

 
    

  return (
    <>
      <AppointmentCalendar appointments={appointments}   onSelectSlot={handleSelectSlot} />

      <AppointmentForm
        selectedSlot={selectedSlot} // slot seleccionado desde calendario
        setSelectedSlot={setSelectedSlot} // para cerrar modal
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </>
  );
};
