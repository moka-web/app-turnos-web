import React, { useState } from 'react'


type FormData = {
    name: string;     
    email: string;
    date: string;
    time: string;
    service: string;
}


export const AppointmentForm = () => {

    const [formData, setFormData] = useState <FormData> ({
        name: '',
        email: '',
        date: '',
        time: '',
        service: ''
    })

    const [ appointments, setAppointments] = useState <FormData[]> ([
        formData
    ])  

   
    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {


        e.preventDefault();
        const form = e.currentTarget;

        const formData = {
            name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
            email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
            date: (form.elements.namedItem('date') as HTMLInputElement)?.value,
            time: (form.elements.namedItem('time') as HTMLInputElement)?.value,
            service: (form.elements.namedItem('service') as HTMLInputElement)?.value,
        };

        setFormData(formData);

        setAppointments([...appointments, formData]);

        localStorage.setItem('appointments', JSON.stringify(appointments));
        
    }


    console.log(formData)

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

            <button > submit </button>

    </form>

    
    </div>
  )
}
