
import { AppointmentList } from '../components/AppointmentList'

export const AdminHome = () => {
  return (
    <>
    <div className=' flex w-full '>

    <aside className='border-2 border-amber-600 w-[20%] h-screen' >

     <h3> aside </h3>

    </aside>    
    
    <section className=' w-[80%] h-screen p-10 border-4 border-green-700' >
        <AppointmentList/>
    </section>

    </div>
    
    </>
  

)
}
   