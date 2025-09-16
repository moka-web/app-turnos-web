import type { AppointmentDataType } from "./AppointmentForm";

export const AppointmentItemList = ({
  name,
  email,
  date,
  time,
  service,
}: AppointmentDataType) => {



  return (
    <article className=" rounded border-2 border-gray-300   w-full p-4">
      <h3 className="font-bold">{name}</h3>
      <p>{email}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{service}</p>
      <button className="bg-green-500 text-white font-bold rounded p-2">Modificar</button>
      <button className="bg-red-500 text-white font-bold rounded p-2" >Eliminar</button>
    </article>
  );



};
