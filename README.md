
# ERP Test

This repository is the skeleton of an ERP (Enterprise Resource Planning) system built with **Django** and **React**. It provides a basic structure for a full-stack application where:

- **Backend:** Built with Django and Django REST Framework, offering API endpoints for user management, customers, orders, and more.
- **Frontend:** Developed with React, featuring modern UI components using Material UI, routing with React Router, and state/fetch management with React Query and React Hook Form.

## Technologies Used

### Backend
- **Python**
- **Django**
- **Django REST Framework**
- **JWT Authentication** (using [djangorestframework-simplejwt](https://github.com/jazzband/djangorestframework-simplejwt))

### Frontend
- **React**
- **Create React App** (`react-scripts`)
- **Material UI**
  - `@mui/material`
  - `@mui/icons-material`
  - `@mui/x-data-grid`
- **React Router DOM**
- **Axios**
- **@tanstack/react-query**
- **React Hook Form**
- **Yup** and **@hookform/resolvers**
- **Notistack**

## Directory Structure

```plaintext
erp_project/
├── erp_project/        # Django project settings, URLs, and configuration
├── accounts/           # Django app for user management and authentication
├── customers/          # Django app for managing customers
├── orders/             # Django app for managing orders
└── frontend/           # React frontend application
```

## Setup Instructions

### Backend (Django)

1. **Create and activate a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Apply migrations:**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Run the development server:**

   ```bash
   python manage.py runserver
   ```

### Frontend (React)

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

> **Note:** Ensure both the Django backend and the React frontend servers are running concurrently during development. The React app is configured to communicate with the Django backend.

## Features

- **User Authentication:**  
  Provides login, logout, and registration using JWT for secure API access.

- **Protected Routes:**  
  Frontend routes for customers, orders, etc., are protected and require user authentication.

- **Modular Structure:**  
  The project is organized into multiple Django apps (accounts, customers, orders) and a separate React frontend for better scalability and maintainability.

## Future Work

- **Additional Modules:**  
  Implement further ERP modules (e.g., inventory management, reporting/dashboard).

- **UI/UX Enhancements:**  
  Enhance the user interface with more advanced components and improve responsiveness.

- **Testing:**  
  Add comprehensive unit and integration tests for both backend and frontend.

## License

This project is provided as-is under the MIT License.