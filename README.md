# Furniture-Rental
## Project Developed for Xacademy

### Project Description
This project, developed by a team of 5 people using the AGILE methodology, is a furniture rental management platform for events. The application allows users to register, log in, upload new furniture for rent, modify details of existing furniture, and manage reservations. It was built using the base code provided by Santex.

### Technologies Used
- **Backend**
  - *Node.js and Express.js:* Node.js was used as the runtime environment, and Express.js as the application framework for backend development.
  - *MySQL Database:* The application utilizes a MySQL database to store user information and details of furniture available for rental.
  - *Sequelize ORM:* Sequelize was employed as the ORM to interact with the MySQL database and facilitate CRUD operations in the database.

- **Frontend**
  - *Angular:* The frontend of the application was developed using the Angular framework, providing a dynamic and highly interactive user interface.
  - *HTML, CSS, Bootstrap, and TypeScript:* HTML, CSS, and Bootstrap were used to structure and style the user interface, while TypeScript was used for client-side development.

### Key Features
#### User Authentication
The application allows users to:
- *Register:* Users can register by providing their basic information and creating login credentials.
- *Log In:* Registered users can log in with their credentials to access additional functionalities of the application.

#### Furniture Management
Users can:
- *Upload Furniture:* Users can add new furniture for rent, providing details such as name, description, price, stock, and availability dates.
- *Modify Furniture:* They can update details of existing furniture, including name, description, price, stock, and availability dates.
- *Soft Delete Furniture:* Furniture can be logically deleted, marked as deleted in the database without permanently removing the records.

#### Reservations
Users have the ability to:
- *Make Reservations:* They can view available furniture and make reservations for specific date ranges.

### Middleware and Security
#### Request Logging Middleware
This middleware logs detailed information about incoming requests. It captures the requested URL, query parameters, request method, headers,
and request body. The logged information is useful for tracking and debugging data flow in the application.

#### Authentication Middleware
This middleware is responsible for authenticating incoming requests. It extracts the authorization token from the request header and verifies its
validity using the provided session secret. If the token is valid, the request is allowed to proceed. It also checks if the requested resource belongs
to the authenticated user, ensuring that each user can only access and modify their own resources.

#### Security
*Endpoint Protection*
The aforementioned middlewares significantly contribute to the security of the application.
The Request Logging Middleware helps trace incoming requests, invaluable for troubleshooting and tracking any suspicious activity.
Furthermore, the Authentication Middleware ensures that requests are processed only if they come from authenticated users and that these users can only access their own resources.

### AGILE Methodology
The team followed the agile methodology for project development. This involved iterative cycles and incremental deliveries organized into 4 two-week sprints.
Regular review and planning meetings were held to ensure continuous and adaptive product development. SCRUM ceremonies were conducted, where team members took turns acting as the scrum master.

