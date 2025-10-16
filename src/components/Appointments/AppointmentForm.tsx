
import type { calendarFormProps } from '../../types/calendarFormProps.type';
import { FormComponent } from './Form';





export const AppointmentForm = ({ appointments ,setAppointments, selectedSlot, setSelectedSlot} :  calendarFormProps ) => {

    if (!selectedSlot) return null;
   
   

        console.log("appointments desde el form " , appointments)
    
 
  return (
     <>

        <FormComponent  
        setAppointments={setAppointments} 
        appointments={appointments} 
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}

        
        />
     </>
  )
}
