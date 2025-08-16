
import React from 'react'

export const AppointmentList = () => {
        //necesito que este componente se actualice cuando se agrega un nuevo turno en el formulario
        
    console.log(" estoy en el componente de listado ",localStorage.getItem('appointments'));

    // Aqui deberia mostrar la lista de turnos guardados en el localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');




  return (
    <div className='border-2 border-gray-300 p-4 rounded-lg shadow-md m-10'>

        {
            appointments?.map((appointment: any, index: number) => (
                <article key={index} className='border-2 border-gray-300 p-2 w-full m-2'>
    
                    <h3 className='font-bold'>{appointment.name}</h3>
                    <p>{appointment.email}</p>
                    <p>{appointment.date}</p>
                    <p>{appointment.time}</p>
                    <p>{appointment.service}</p>

                </article>
            ))
        }

      

    </div>
  )
}
