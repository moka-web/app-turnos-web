
import type { calendarFormProps } from '../../types/calendarFormProps.type';
import { FormComponent } from './Form';





export const AppointmentForm = ({ appointments , selectedSlot, setSelectedSlot} :  calendarFormProps ) => {

    if (!selectedSlot) return null;
    
  return (
     <>

            <FormComponent  selectedSlot={selectedSlot}  setSelectedSlot={setSelectedSlot}  appointments={appointments}  />
      
     </>
  )
}
