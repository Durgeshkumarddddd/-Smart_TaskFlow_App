🚀 Smart TaskFlow App

Smart TaskFlow App is a Full Stack Task Management Application built using Spring Boot and Angular.
The application helps teams and individuals efficiently manage tasks, track progress, and organize workflow.

It includes secure authentication using JWT, task prioritization, deadline tracking, and mentor-based task assignment.

📌 Project Overview

Smart TaskFlow App is designed to simplify workflow management by allowing users to create, assign, monitor, and complete tasks efficiently.

The system supports role-based access control, where mentors can assign tasks to users and track their progress.

This project demonstrates modern full stack development practices using Spring Boot REST APIs and Angular frontend.

🛠️ Tech Stack
Backend

☕ Java

🌱 Spring Boot

🔐 Spring Security

🪪 JWT Authentication

🗄 Spring Data JPA

🔗 REST APIs

🧩 Hibernate

Frontend

🅰 Angular

⚡ TypeScript

🎨 HTML

🎨 CSS

🅱 Bootstrap

Database

🐬 MySQL

Tools

Maven

Git & GitHub

Postman

Spring Tool Suite / IntelliJ

VS Code

⚙️ Key Features
🔐 Security

JWT Based Authentication

Secure Login & Registration

Role-Based Authorization

📋 Task Management

Create tasks

Update tasks

Delete tasks

View all tasks

🎯 Task Workflow

Set Task Priority (Low / Medium / High)

Add Task Deadlines

Track Task Status

👨‍🏫 Mentor Features

Mentors can assign tasks to users

Track task progress

Monitor task completion

📊 Tracking

Track task completion

Monitor workflow progress

🏗️ System Architecture
Angular Frontend
       │
       │  REST API (HTTP Requests)
       ▼
Spring Boot Backend
       │
       ▼
     MySQL Database
📂 Project Structure
Smart_TaskFlow_App
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   ├── security
│   └── config
│
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   ├── services
│   │   │   ├── models
│   │   │   └── guards
│
└── README.md
▶️ How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/Durgeshkumarddddd/Smart_TaskFlow_App.git
🖥 Backend Setup (Spring Boot)
Step 1: Open the backend project in

Spring Tool Suite (STS)

IntelliJ IDEA

Eclipse

Step 2: Update Maven Dependencies
Right Click Project → Maven → Update Project
Step 3: Configure Database

Update application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/taskflow_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
Step 4: Run the Application

Run the Spring Boot main class

Backend will run at:

http://localhost:8080
🌐 Frontend Setup (Angular)
Step 1: Navigate to frontend
cd frontend
Step 2: Install dependencies
npm install
Step 3: Run Angular application
ng serve

Frontend will run at:

http://localhost:4200
🔗 Example API Endpoints
Method	Endpoint	Description
POST	/auth/register	Register user
POST	/auth/login	Login user
GET	/tasks	Get all tasks
POST	/tasks	Create task
PUT	/tasks/{id}	Update task
DELETE	/tasks/{id}	Delete task
📸 Screenshots

You can add screenshots here:

screenshots/dashboard.png
screenshots/create-task.png
screenshots/task-management.png
🧠 Learning Outcomes

This project helped in learning:

Full Stack Development

Spring Boot REST APIs

Angular Components & Services

JWT Authentication

Spring Security

Role-Based Authorization

Database Integration with JPA

Client-Server Architecture

🚀 Future Improvements

Email notifications

Real-time task updates

WebSocket integration

Mobile responsive improvements

Docker deployment

Cloud deployment (AWS / Render)

🤝 Contributors

👨‍💻 Durgeshkumar

GitHub:
https://github.com/Durgeshkumarddddd
