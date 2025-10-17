
import { useState } from 'react'
import { AddAppointmentButton } from '../components/AdminAppointmentsViews/AddAppointmentButton'
import { AppointmentList } from '../components/AdminAppointmentsViews/AppointmentList'
import { AppointmentManager } from '../components/Appointments/AppointmentManager'

export const AdminHome = () => {

    const [ appointmentButtonClick , setappointmentButtonClick ] = useState(false)


    const handleappointmentButtonClick = ()=>{


          !appointmentButtonClick ? 
          setappointmentButtonClick(true) : setappointmentButtonClick(false) ; 

         
    }  





  return (
    <>
    <div className=' flex w-full '>

        <aside className="w-[20%] h-screen p-4 bg-white shadow-md flex flex-col space-y-6 border-r border-gray-200">
  <h3 className="text-xl font-semibold text-gray-800">Panel Admin</h3>

  {/* Filtros */}
  <div className="flex flex-col space-y-2">
    <h4 className="text-gray-700 font-medium">Filtros</h4>
    <input
      type="text"
      placeholder="Buscar cliente"
      className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition"
    />
    <input
      type="date"
      className="w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition"
    />
  </div>

  {/* Acciones rápidas */}
  <div className="flex flex-col space-y-2">
    <button className="bg-blue-500 text-white rounded-lg px-3 py-2 shadow-md hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-1">
      {/* Podés agregar icono aquí */}
      Agregar Turno
    </button>
    <button className="bg-gray-100 text-gray-800 rounded-lg px-3 py-2 shadow-sm hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-1">
      Exportar CSV
    </button>
  </div>

  {/* Resumen rápido */}
  <div className="flex flex-col space-y-1 p-2 rounded-lg bg-gray-50 shadow-sm">
    <h4 className="text-gray-700 font-medium text-sm">Resumen</h4>
    <p className="text-gray-600 text-sm">Turnos hoy: 5</p>
    <p className="text-gray-600 text-sm">Turnos semana: 23</p>
    <p className="text-gray-600 text-sm">Servicios más solicitados: Corte de cabello</p>
  </div>
</aside>

    
    <section className=' w-[80%] h-screen p-10 ' >
        <AppointmentList/>
      {/* Botón flotante */}
      <AddAppointmentButton clickFunction={handleappointmentButtonClick} active ={appointmentButtonClick} />
    </section>


      { appointmentButtonClick && 
       
        <div className='flex justify-center items-center  w-[70vw] '>

          <AppointmentManager></AppointmentManager>

        </div>
    
       }








    </div>
    
    </>
  

)
}
   