import { Calendar, dateFnsLocalizer } from 'react-big-calendar'


import {format, parse, startOfWeek , getDay  } from 'date-fns'

// import getDay from 'date-fns/getDay'
import { es } from 'date-fns/locale/es'

const locales = {
  es: es,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})



const messages = {
  allDay: 'Todo el día',
  previous: 'Anterior',
  next: 'Siguiente',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'No hay eventos en este rango',
}






export const AppointmentCalendar = () => (

  <div>
    <Calendar
    
      culture="es"  
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={ { height: 500 }}
      messages={messages}
    />

  </div>
)