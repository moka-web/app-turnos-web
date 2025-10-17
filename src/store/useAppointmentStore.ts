import { create } from "zustand";
import type { AppointmentDataType } from "../types/appointment.type";

interface AppointmentStore {
  appointments: AppointmentDataType[];
  addAppointment: (appointment: AppointmentDataType) => void;
  removeAppointment: (id: string) => void;
  setAppointments: (appointments: AppointmentDataType[]) => void;
}
//create genera el store.
export const useAppointmentStore = create<AppointmentStore>((set) => ({
   
  //set es como el dispatch del reducer, sirve para actualizar el estado.

  //Guardamos y leemos de localStorage directamente dentro del store para persistir los datos.
  appointments: JSON.parse(localStorage.getItem("appointments") || "[]"),
    

  //Tenemos funciones (addAppointment, removeAppointment) que pueden usar los componentes.
    
  addAppointment: (appointment) =>
    set((state) => {

      const updated = [...state.appointments, appointment];

      localStorage.setItem("appointments", JSON.stringify(updated));
      return { appointments: updated };
    
    }),



    removeAppointment: (id) =>
    set((state) => {

      const updated = state.appointments.filter((a) => a.id !== id);

      localStorage.setItem("appointments", JSON.stringify(updated));
      
      return { appointments: updated };
    
    }),


     // sirve para sobrescribir todo el estado (por ejemplo, si cargás datos externos o querés resetear).
     
    setAppointments: (appointments) => {

    localStorage.setItem("appointments", JSON.stringify(appointments));
    
    set({ appointments });
  
  },









}));
