import type { AppointmentDataType } from "./appointment.type";

export type AppointmentCalendarProps = {
  appointments: AppointmentDataType[];
  onSelectSlot: (slot: { start: Date; end: Date }) => void;
};