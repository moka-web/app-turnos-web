import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import type { ToolbarProps } from "react-big-calendar";
import type { SlotInfo } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import { useState, useMemo, useCallback } from "react";
import type { AppointmentCalendarProps } from "../../types/appointmentCalendarProps.type";
const locales = { es };

const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "No hay eventos en este rango",
};



export const AppointmentCalendar = ( {  appointments, onSelectSlot} : AppointmentCalendarProps) => {
  // ✅ Estado para eventos

 const events = appointments.map(app => {
  const start = new Date(`${app.date}T${app.time}`);
  const end = new Date(start.getTime() + 60 * 60 * 1000); // le sumo 1h al turno

  return {
    title: "Reservado !!",
    start,
    end,
    resource: app, // guardo todo el objeto original por si lo necesito
  };
});

  console.log(appointments)

  // ✅ Memoizar localizer
  const localizer = useMemo(
    () =>
      dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
      }),
    []
  );

  // ✅ Memoizar eventos para referencia estable
  const eventsMemo = useMemo(() => events, [events]);

  // Toolbar personalizado: solo Next y Previous
  //las toolbarProps para typescript vienen ya proporcionadas por la libreria

  const CustomToolbar = ({ label, onNavigate }: ToolbarProps) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <button onClick={() => onNavigate("PREV")}>Anterior</button>
        <span>{label}</span>
        <button onClick={() => onNavigate("NEXT")}>Siguiente</button>
      </div>
    );
  };


  return (
    <div>
      
      <Calendar
        events={eventsMemo}
        culture="es"
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: 600 }}
        messages={messages}
        // esta toolbar se puede modificar segun la vista y el rol
        components={{ toolbar: CustomToolbar }}
        selectable
        onSelectSlot={(slotInfo: SlotInfo) =>
        onSelectSlot({ start: new Date(slotInfo.start), end: new Date(slotInfo.end) })
      }
        views={["month", "day"]} // Solo vistas semana y día
        defaultView="month"
      />

    </div>
  );
};
