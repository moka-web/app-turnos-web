
# Turnos Web - Documentación

Bienvenido a la documentación de la aplicación de  **Turnos Web**.

## Descripción

Turnos Web es una aplicación para gestionar turnos de manera sencilla y eficiente. Permite crear, visualizar y administrar turnos en un calendario interactivo, diferenciando estados como pendiente, confirmado o cancelado. .


## Instalación

Instrucciones para instalar y ejecutar el proyecto:

```sh
pnpm install
pnpm run dev
```

## Estructura del proyecto

// aun por definirse 

## Uso

Abrir la aplicación en el navegador (http://localhost:5173 por defecto).

Completar el formulario para agregar un nuevo turno: cliente, fecha y hora.

Los turnos se mostrarán automáticamente en:

La lista de turnos.

El calendario interactivo.

Hacer click en un turno dentro del calendario para ver detalles o cambiar su estado.

Los turnos se guardan en LocalStorage, por lo que permanecen al recargar la página.




## Dependencias

La aplicación utiliza las siguientes librerías:

react - Biblioteca principal para la interfaz.

date-fns - Para manipulación y formato de fechas.

react-router-dom - Para navegación entre páginas .

tailwindcss - Para estilos y diseño responsivo.

react-big-calendar - Para mostrar los turnos en un calendario interactivo.


