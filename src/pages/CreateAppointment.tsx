import { AppointmentForm } from "../components/AppointmentForm"

export const CreateAppointment = () => {
           
   

  return (
    <div className="flex flex-col justify-center items-center mt-10">
          
             <h1 className="text-center"> Crea tu turno</h1>

            <div className="  w-5xl p-10">
                <AppointmentForm/>
            
            </div>

    </div>
  )
}
