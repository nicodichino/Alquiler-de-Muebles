# Alquiler-de-Muebles
## Proyecto realizado para Xacademy

### Descripción del Proyecto
Este proyecto, desarrollado por un equipo de 5 personas aplicando metodología AGILE, es una plataforma de gestión de alquiler de muebles para eventos. La aplicación permite a los usuarios registrarse, iniciar sesión, subir nuevos muebles para alquilar, modificar detalles de los muebles existentes y gestionar las reservas. Se desarrolló utilizando el código base brindado por Santex.

### Tecnologías Utilizadas
- *Backend*
  - Node.js y Express.js: Se utilizó Node.js como entorno de ejecución y Express.js como marco de aplicación para el desarrollo del backend.
  - Base de Datos MySQL: La aplicación utiliza una base de datos MySQL para almacenar la información de los usuarios y los muebles disponibles para alquiler.
  - Sequelize ORM: Se empleó Sequelize como ORM para interactuar con la base de datos MySQL y facilitar las operaciones CRUD en la base de datos.

- *Frontend*
  - Angular: El frontend de la aplicación fue desarrollado utilizando el framework Angular, lo que proporciona una interfaz de usuario dinámica y altamente interactiva.
  - HTML, CSS, Bootstrap y TypeScript: Se utilizaron HTML, CSS y Bootstrap para estructurar y estilizar la interfaz de usuario, mientras que TypeScript se utilizó para el desarrollo del lado del cliente.

### Funcionalidades Principales
#### Autenticación de Usuarios
La aplicación permite a los usuarios:
- Registrarse: Los usuarios pueden registrarse proporcionando su información básica y creando credenciales de inicio de sesión.
- Iniciar Sesión: Los usuarios registrados pueden iniciar sesión con sus credenciales para acceder a las funcionalidades adicionales de la aplicación.

#### Gestión de Muebles
Los usuarios pueden:
- Subir Muebles: Los usuarios pueden agregar nuevos muebles para alquilar, proporcionando detalles como nombre, descripción, precio, stock y fechas de disponibilidad.
- Modificar Muebles: Pueden actualizar los detalles de los muebles existentes, incluyendo nombre, descripción, precio, stock y fechas de disponibilidad.
- Eliminar Muebles de Forma Lógica: Los muebles pueden ser eliminados de forma lógica, marcándolos como eliminados en la base de datos sin borrar permanentemente los registros.

#### Reservas
Los usuarios tienen la capacidad de:
- Realizar Reservas: Pueden ver los muebles disponibles y hacer reservas para un rango de fechas específico.

### Middleware y Seguridad
#### Middleware de Registro de Log
Este middleware registra información detallada sobre las solicitudes entrantes. Captura la URL solicitada, los parámetros de consulta, el método de solicitud, las cabeceras y el cuerpo de la solicitud. La información registrada es útil para el seguimiento y la depuración del flujo de datos en la aplicación.

#### Middleware de Autenticación
Este middleware se encarga de autenticar las solicitudes entrantes. Extrae el token de autorización del encabezado de la solicitud y verifica su validez utilizando el secreto de sesión proporcionado. Si el token es válido, se permite que la solicitud continúe. También verifica si el recurso solicitado pertenece al usuario autenticado, asegurando que cada usuario solo pueda acceder y modificar sus propios recursos.

#### Seguridad
Protección de Endpoints
Los middlewares mencionados anteriormente contribuyen significativamente a la seguridad de la aplicación. El Middleware de Registro de Log ayuda a rastrear las solicitudes entrantes, lo que es invaluable para el diagnóstico de problemas y el seguimiento de cualquier actividad sospechosa. Además, el Middleware de Autenticación garantiza que las solicitudes solo sean procesadas si provienen de usuarios autenticados y que estos usuarios solo pueden acceder a sus propios recursos.

### Metodología AGILE
El equipo siguió la metodología ágil para el desarrollo del proyecto. Esto implicó ciclos iterativos y entregas incrementales que se organizaron en 4 sprints de 2 semanas cada uno. Se llevaron a cabo reuniones regulares de revision y planificacion para garantizar un
desarrollo continuo y adaptativo del producto. Se realizaron las ceremonias SCRUM, donde miembros del equipo asumimos el rol de scrum master en distintos mometntos.
