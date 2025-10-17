import type { AppointmentDataType } from "./appointment.type";


export type calendarFormProps ={
  appointments : AppointmentDataType[],
  selectedSlot: {start: Date; end: Date} | null;
  setSelectedSlot: React.Dispatch<React.SetStateAction<{start: Date; end: Date} | null>>;
}
