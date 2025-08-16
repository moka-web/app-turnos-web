import type { AppointmentDataType } from "./AppointmentForm";
import { AppointmentItemList } from "./AppointmentItemList";


export const AppointmentList = () => {
        //necesito que este componente se actualice cuando se agrega un nuevo turno en el formulario
        
    console.log(" estoy en el componente de listado ",localStorage.getItem('appointments'));

    // Aqui deberia mostrar la lista de turnos guardados en el localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');

    


  return (
    <div className='border-2 border-gray-300  rounded-lg shadow-md  h-full w-full  flex flex-col gap-2 p-2'>

        {
            appointments?.map((appointment : AppointmentDataType , index: number) => (
                
              <AppointmentItemList
                 key={index}
                 name= {appointment.name}   
                 email={appointment.email}
                 date={appointment.date}
                 time={appointment.time}
                 service={appointment.service}
                 />
        
            ))
        }

      

    </div>
  )
}
