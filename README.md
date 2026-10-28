# FACPYA - Front (cascarón)

Proyecto base en Angular con la plantilla [Sakai](https://github.com/primefaces/sakai-ng) (PrimeNG). Ya trae el menú lateral, la barra superior y la configuración para llamar a la API `ProgramasFacpya.Api`. Lo que falta es construir las pantallas y conectarlas.

## Estructura

```
src/
├── environments/environment.ts   URL de la API (ya configurada)
└── app/
    ├── layout/                     Menú lateral y barra superior
    │   └── component/app.menu.ts   Opciones del menú
    ├── models/                     (vacío) Interfaces de los datos
    ├── services/                   (vacío) Llamadas HTTP a la API
    └── pages/                      Pantallas (solo trae "inicio")
```

## Pasos para agregar una pantalla (ejemplo: Alumnos)

1. **Modelo**: en `src/app/models/` crea las interfaces con los mismos campos que regresa y recibe la API (`ApiResponse`, `Alumno`, `AlumnoDTO`).
2. **Servicio**: en `src/app/services/` crea un servicio con `HttpClient` que llame a cada endpoint (`ObtenerTodos`, `ObtenerPorId`, `Crear`, `Actualizar`, `Eliminar`). La URL base sale de `environment.endpoint`.
3. **Pantalla**: en `src/app/pages/alumnos/` crea el componente con la tabla (`p-table`) y el formulario (`p-dialog`).
4. **Ruta**: agrega la ruta en `src/app.routes.ts`.
5. **Menú**: agrega la opción en `src/app/layout/component/app.menu.ts`.

> Este proyecto no usa zone.js (Angular zoneless). Guarda en `signal()` todo lo que cambie dentro de un `subscribe` (lista, diálogo abierto, cargando) para que la pantalla se actualice.

## Cómo correrlo

1. Levantar la API (`dotnet run`), que escucha en `http://localhost:5165`.
2. Instalar dependencias (solo la primera vez):
   ```
   npm install
   ```
3. Levantar el front:
   ```
   npm start
   ```
4. Abrir http://localhost:4200
