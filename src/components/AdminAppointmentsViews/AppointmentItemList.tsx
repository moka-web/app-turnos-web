import type { AppointmentDataType } from "../../types/appointment.type";

export const AppointmentItemList = ({
  name,
  email,
  date,
  time,
  service,
}: AppointmentDataType) => {
  return (
    <li className="flex items-center justify-between w-full border-b border-gray-200 py-3  hover:bg-gray-50 transition">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm text-gray-700 w-full">
        
        
        <span className="font-medium text-gray-900 w-32 truncate">{name}</span>
        
        <span className="w-40 truncate">{email}</span>
        
        <span className=" ml-2 w-24">{date}</span>
        
        <span className="w-20 m-auto">{time}</span>
        
        <span className="w-32 truncate">{service}</span>
      
      
      </div>

      <div className="flex gap-2 ml-4">
        <button className="text-teal-500 text-sm font-medium px-3 py-1 rounded-md  hover:bg-green-100 transition">
          Modificar
        </button>
        <button className="text-red-500 text-sm font-medium px-3 py-1 rounded-md  hover:bg-red-100 transition">
          Eliminar
        </button>
      </div>
    </li>
  );
};