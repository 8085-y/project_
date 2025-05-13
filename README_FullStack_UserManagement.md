
# 🧑‍💻 Full Stack User Management System

A full-stack user management system built using Java (Spring Boot) for the backend and React.js for the frontend. This project includes complete user registration, login, and CRUD operations, with responsive UI and cloud deployment. Built to demonstrate clean architecture, CI/CD readiness, and full application lifecycle management.



## 🌟 Why I'm Proud of This Project

- Designed and developed independently from scratch
- Built using industry-relevant tools like Spring Boot, React, MySQL, and AWS
- Deployed on AWS EC2 with CI/CD using GitHub Actions
- Practiced version control and collaboration using Git
- Real-world simulation of full-stack product ownership



## 📸 Screenshots

## ⚙️ Technologies Used

### Backend
- Java 17
- Spring Boot
- Spring Data JPA + Hibernate
- MySQL (local or cloud-hosted)
- RESTful APIs

### Frontend
- React.js
- Axios for API calls
- Bootstrap for UI styling
- React Router

### DevOps & Tools
- Git & GitHub
- GitHub Actions for CI/CD
- AWS EC2 (Linux-based deployment)
- Postman (for API testing)
- Docker (optional containerization)

### Backend
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm start
```



## 🔐 Features

- User Registration and Login
- Role-based Authorization (e.g., Admin/User)
- Add, Update, Delete Users
- Token/session handling (extendable to JWT)
- Integrated REST APIs
- Form validation and error handling


## ☁️ Deployment Details

- Hosted backend on **AWS EC2**
- Frontend served via React scripts or Nginx (optional)
- MySQL configured locally or via **AWS RDS**
- Environment variables stored securely

---

## 🧪 Testing

- Manual testing via Postman
- Basic unit tests for backend logic (Spring Test)
- Frontend tested via UI walkthrough and state validation

---

## 📁 Project Structure

```
user-management-app/
├── backend/ (Spring Boot)
├── frontend/ (React)
├── screenshots/ (UI images)
├── docker-compose.yml (optional)
└── README.md
```



