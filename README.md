# 🚀 Smart TaskFlow App

**Smart TaskFlow App** is a Full Stack Task Management Web Application built using **Spring Boot (Backend)** and **Angular (Frontend)**.  
It helps users and teams efficiently create, assign, track, and manage tasks with secure authentication and structured workflow management.

The application includes **JWT-based authentication, task priority management, deadlines, mentor task assignment, and task tracking features**.

---

# 📌 Project Overview

Smart TaskFlow App is designed to simplify task and workflow management for teams and individuals.  
The system allows users to create tasks, set priorities, assign deadlines, and track progress.

Mentors or managers can assign tasks to users and monitor their completion status.

This project demonstrates **modern full stack development using Spring Boot REST APIs and Angular frontend**.

---

# 🛠️ Tech Stack

## Backend
- Java
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate
- REST APIs

## Frontend
- Angular
- TypeScript
- HTML
- CSS
- Bootstrap

## Database
- MySQL

## Tools
- Maven
- Git & GitHub
- Postman
- Spring Tool Suite / IntelliJ
- VS Code

---

# ⚙️ Key Features

### 🔐 Security
- JWT Based Authentication
- Secure Login and Registration
- Role-Based Authorization

### 📋 Task Management
- Create Tasks
- Update Tasks
- Delete Tasks
- View All Tasks

### 🎯 Task Workflow
- Set **Task Priority (Low / Medium / High)**
- Add **Task Deadlines**
- Track **Task Status**

### 👨‍🏫 Mentor Features
- Mentors can assign tasks to users
- Track task progress
- Monitor task completion

### 📊 Tracking
- Track task progress
- Monitor workflow efficiency

---

# 🏗️ System Architecture

```
Angular Frontend
       │
       │  REST API (HTTP Requests)
       ▼
Spring Boot Backend
       │
       ▼
     MySQL Database
```

---

# 📂 Project Structure

```
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
```

---

# ▶️ How to Run the Project

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Durgeshkumarddddd/Smart_TaskFlow_App.git
```

---

# 🖥 Backend Setup (Spring Boot)

### Step 1: Open backend project in

- Spring Tool Suite (STS)
- IntelliJ IDEA
- Eclipse

### Step 2: Update Maven Dependencies

Right Click Project → **Maven → Update Project**

### Step 3: Configure Database

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/taskflow_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Step 4: Run Application

Run the **Spring Boot main class**

Backend will start at:

```
http://localhost:8080
```

---

# 🌐 Frontend Setup (Angular)

### Step 1: Navigate to frontend folder

```bash
cd frontend
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Run Angular application

```bash
ng serve
```

Frontend will run at:

```
http://localhost:4200
```

---

# 🔗 Example API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| POST | /auth/register | Register User |
| POST | /auth/login | Login User |
| GET | /tasks | Get All Tasks |
| POST | /tasks | Create Task |
| PUT | /tasks/{id} | Update Task |
| DELETE | /tasks/{id} | Delete Task |

---

# 📸 Screenshots

You can add screenshots here.

Example:

```
screenshots/dashboard.png
screenshots/create-task.png
screenshots/task-management.png
```

---

# 🧠 Learning Outcomes

- Full Stack Development using Spring Boot and Angular
- Spring Security and JWT Authentication
- REST API Development
- Angular Components and Services
- Role-Based Authorization
- Database Integration using JPA/Hibernate
- Client-Server Architecture

---

# 🚀 Future Improvements

- Email notifications
- Real-time task updates
- WebSocket integration
- Mobile responsive improvements
- Docker deployment
- Cloud deployment (AWS / Render)

---

# 🤝 Contributor

👨‍💻 **Durgeshkumar**

GitHub:  
https://github.com/Durgeshkumarddddd

---

⭐ If you like this project, please give it a **Star on GitHub**.
