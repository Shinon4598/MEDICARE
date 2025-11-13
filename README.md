## MediCare – Sistema de Gestión de Turnos Médicos

MediCare es una aplicación web fullstack desarrollada para optimizar la gestión de turnos con profesionales de la salud, permitiendo a los pacientes solicitar turnos médicos por especialidad y confirmarlos.
Adicionalmente, un administrador gestiona médicos, especialidades y disponibilidad horaria.

**Descripción general**

El sistema está compuesto por un frontend en React y un backend en ASP.NET Core, conectados mediante una API REST segura con autenticación JWT.
La arquitectura implementa buenas prácticas de desarrollo, como separación por capas, uso de DTOs, Repository Pattern, Dependency Injection, e integración con Entity Framework Core para la persistencia de datos.

**Tecnologías principales**

**Frontend**
Tecnología Descripción
React + Vite Framework y entorno de desarrollo rápido y modular.
Wouter Enrutamiento simple y eficiente para SPA.
React Hook Form (RHF) Manejo de formularios con excelente performance.
Zod Validación de datos tipada y confiable.
Lucide React Conjunto moderno de íconos.
Font Awesome Librería adicional de íconos para la interfaz.
Backend
Tecnología Descripción
ASP.NET Core Framework robusto para APIs REST escalables y seguras.
Entity Framework Core (EF Core) ORM para el manejo de la base de datos.
JWT (JSON Web Token) Autenticación y autorización basada en tokens.
Repository Pattern Abstracción del acceso a datos para mantener un bajo acoplamiento.
DTOs (Data Transfer Objects) Transporte seguro y controlado de datos entre capas.

**Características principales**

- Autenticación y autorización con JWT.

- Gestión de médicos, especialidades y turnos por parte del administrador.

- Solicitud y confirmación de turnos por parte del paciente.

- Arquitectura en capas con Repository Pattern, Dependency Injection y DTOs.

- Validación de formularios con React Hook Form y Zod.

- Conexión segura entre frontend y backend mediante API REST.

**Instalación y ejecución**
**Requisitos previos**

Node.js v18 o superior

.NET 8 SDK

SQL Server o LocalDB

**Frontend**
cd frontend
npm install
npm run dev

La aplicación estará disponible en:

http://localhost:5173

**Backend**
cd backend
dotnet restore
dotnet run

El servidor se ejecutará en:

https://localhost:5001

o

http://localhost:5000

**¿Qué hace dotnet restore?**

El comando dotnet restore descarga e instala automáticamente las dependencias NuGet declaradas en el archivo .csproj, garantizando que el proyecto tenga todas las bibliotecas necesarias antes de compilarse.

**Autenticación**

- El backend utiliza JWT (JSON Web Token) para proteger los endpoints de la API.
- Cada solicitud autenticada debe incluir el token en el encabezado HTTP:

- Authorization: Bearer <tu_token_jwt>

**Roles de usuario**
_Administrador_

- Gestiona médicos, especialidades y turnos.

- Puede agregar, editar y eliminar registros.

_Paciente_

- Puede registrarse e iniciar sesión.

- Solicita turnos por especialidad.

- Confirma los turnos asignados.

- Arquitectura y patrones de diseño

**MediCare implementa una arquitectura por capas:**

Capa Descripción
Controllers Gestionan las solicitudes HTTP y devuelven respuestas a la API.
Services Contienen la lógica de negocio.
Repositories Encapsulan el acceso a la base de datos mediante EF Core.
DTOs Aíslan las entidades del dominio (reglas de negocio) y controlan los datos que se exponen.
Entity Framework Core

- Uso de DbContext para la administración del acceso a datos.

- Configuración de relaciones entre entidades (one-to-many, many-to-many).

- Migraciones automáticas para mantener el esquema actualizado.

- Consultas optimizadas con LINQ y Change Tracking.

**Próximas mejoras**

- Dashboard con métricas para el administrador.

- Mejoras en el diseño visual y futura adaptación responsive.

- Implementación de cancelaciones y reprogramaciones de turnos.

**Autor**
Desarrollado por el equipo de MediCare.
