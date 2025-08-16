import React, { useState } from 'react'


export type AppointmentDataType = {
    name: string;     
    email: string;
    date: string;
    time: string;
    service: string;
    id? : string
}


export const AppointmentForm = () => {
    // Estado para manejar los datos del formulario
    // no se si es necesario crear un objeto por defecto, pero lo hago por si acaso ? 
    
    // deberia crear un estado global para manejar los datos del formulario y de la lista de turnos

    const [formData, setFormData] = useState <AppointmentDataType>()

    const [ appointments, setAppointments] = useState <AppointmentDataType[]> ([])  

    // Maneja el envío del formulario
    // por ahora solo guarda los datos en el estado y en el localStorage    
    
    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {


        e.preventDefault();
        const form = e.currentTarget;

        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
            email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
            date: (form.elements.namedItem('date') as HTMLInputElement)?.value,
            time: (form.elements.namedItem('time') as HTMLInputElement)?.value,
            service: (form.elements.namedItem('service') as HTMLInputElement)?.value,
        };

        setFormData(data);

        setAppointments([...appointments, data]);

        localStorage.setItem('appointments', JSON.stringify(appointments));
        
        console.log(appointments)
    }


   

  return (
    <div className='border-2 border-gray-300 p-4 rounded-lg shadow-md m-10'>
        
    <form className='flex flex-col justify-around ' onSubmit={HandleSubmit}  action="">
            <label htmlFor="name"> nombre </label>
            
            <input name='name' className=' border-2 border-gray-600 m-2' type="text" />
            <label htmlFor="email"> email </label>
            <input  name='email' className=' border-2 border-gray-600 m-2' type="email" />
            <label htmlFor=""> fecha</label>
            <input  name='date' className=' border-2 border-gray-600 m-2'type="date" />
            <label htmlFor=""> horario</label>
            <input  name='time' className=' border-2 border-gray-600 m-2' type="time" />
            <label htmlFor=""> servicio</label>
            <input name = 'service' className=' border-2 border-gray-600 m-2' type="text" />

            <button className=" rounded bg-blue-300 text-white font-bold p-4 cursor-pointer" > submit </button>

    </form>

    
    </div>
  )
}
