# Frontend - Task Management System

# Cấu trúc thư mục

frontend/
│
├── public/
│
├── src/
│ │
│ ├── api/
│ │ ├── axiosClient.js
│ │ └── authApi.js
│ │
│ ├── assets/
│ │
│ ├── components/
│ │ ├── auth/
│ │ │ ├── LoginForm.jsx
│ │ │ └── RegisterForm.jsx
│ │ │
│ │ ├── common/
│ │ ├── dashboard/
│ │ ├── layout/
│ │ │ ├── Content.jsx
│ │ │ ├── Header.jsx
│ │ │ ├── MainLayout.jsx
│ │ │ ├── Sidebar.jsx
│ │ │
│ │ └── task/
│ │
│ ├── config/
│ │
│ ├── contexts/
│ │ └── AuthContext.jsx
│ │
│ ├── hooks/
│ │
│ ├── mocks/
│ │ └── fakeAuth.js
│ │
│ ├── pages/
│ │ ├── DashboardPage.jsx
│ │ ├── LoginPage.jsx
│ │ ├── RegisterPage.jsx
│ │ └── NotFoundPage.jsx
│ │
│ ├── routes/
│ │ ├── AppRoutes.jsx
│ │ └── ProtectedRoute.jsx
│ │
│ ├── styles/
│ │ ├── auth.css
│ │ ├── global.css
│ │ ├── layout.css
│ │ └── variables.css
│ │
│ ├── utils/
│ │
│ ├── validations/
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── .env
├── .gitignore
├── package.json
└── vite.config.js

---

# Component Responsibility

## auth/

Chứa các component liên quan đến xác thực:

```txt
LoginForm.jsx
RegisterForm.jsx
```

Các component này:

* chỉ xử lý UI + form
* gọi API thông qua authApi
* không gọi axios trực tiếp

---

## layout/

Chứa các component layout tổng thể:

```txt
Sidebar.jsx
Header.jsx
MainLayout.jsx
Content.jsx
```

Không xử lý business logic.

---

## dashboard/

Chứa các component dashboard:

Ví dụ:

```txt
DashboardStats.jsx
RecentTasks.jsx
```

---

## task/

Chứa các component liên quan task:

Ví dụ:

```txt
TaskCard.jsx
TaskList.jsx
TaskForm.jsx
```

---

## common/

Chứa reusable component:

Ví dụ:

```txt
Button.jsx
Modal.jsx
Loader.jsx
```

---

# Styling Convention

## File CSS

### auth.css

Chỉ dùng cho:

```txt
Login
Register
```

---

### layout.css

Chỉ dùng cho:

```txt
Sidebar
Header
MainLayout
Content
```

---

### global.css

Chứa:

* reset css
* body style
* font
* global utility

---

### variables.css

Chứa:

* color
* breakpoint
* spacing
* font size

---

# Responsive Rules

## Desktop First

Hệ thống sử dụng:

```txt
Desktop First
```

Sau đó responsive bằng media query.

---

## Breakpoints

```css
480px
768px
1024px
```

---

## Sidebar Responsive

Desktop:

* sidebar fixed bên trái
* width cố định

Mobile:

* sidebar collapse
* ưu tiên full width content

---

## Auth Responsive

Mobile:

* auth card co giãn theo width
* padding giảm
* button full width

---

# State Management Flow

## Auth State

Được quản lý bằng:

```txt
AuthContext
```

File:

```txt
src/contexts/AuthContext.jsx
```

Quản lý:

* user
* loading
* login
* logout

---

## API Flow

Không gọi axios trực tiếp trong component.

Flow đúng:

```txt
Component
→ API Layer
→ axiosClient
→ backend
```

---

# Routing

```bash
npm install react-router-dom
```

## HTTP Request

```bash
npm install axios
```

## Icon

```bash
npm install react-icons
```

## Toast notification

```bash
npm install react-hot-toast
```

## Drag and Drop

```bash
npm install @hello-pangea/dnd
```

---

# Quy ước code

## Naming Convention

### Component

```txt
PascalCase
```

---

### Variable / Function

```txt
camelCase
```

---

# Quy ước import

## Import library trước

```js
import { useState } from "react";
```

## Import internal sau

```js
import LoginForm from "../components/auth/LoginForm";
```

---

# Routing

## Route public

* /login
* /register

## Route protected

* /

Protected route được xử lý bằng:

```txt
src/routes/ProtectedRoute.jsx
```

---

# Authentication Flow

## Login

```txt
LoginForm
→ authApi.login()
→ AuthContext.login()
→ lưu token localStorage
→ redirect dashboard
```

---

## Auto Login

Khi reload trang:

```txt
App load
→ check token
→ gọi /auth/me
→ setUser()
```

---

# Fake Authentication (Demo Mode)

Trong giai đoạn chưa có backend, frontend sử dụng fake authentication.

## File:

```txt
src/mocks/fakeAuth.js
```

## Tài khoản demo

```txt
username: admin
password: 123456
```

---

# API Structure

## axiosClient

File:

```txt
src/api/axiosClient.js
```

Chức năng:

* setup baseURL
* tự động gắn JWT token vào header

---

## authApi

File:

```txt
src/api/authApi.js
```

Các API:

* login
* register
* logout
* me

---

# Responsive Design

Responsive được xử lý bằng CSS Media Query.

Breakpoint chính:

```css
480px
768px
1024px
```

---

# Layout System

## Main Layout

```txt
Sidebar
Header
Content
```

File:

```txt
src/components/layout/MainLayout.jsx
```

---

# Auth Context

Quản lý:

* user
* login
* logout
* loading state

File:

```txt
src/contexts/AuthContext.jsx
```

---

# Backend API Contract

## Success Response

```json
{
  "success": true,
  "message": "Success",
  "data": {}
}
```

## Error Response

```json
{
  "success": false,
  "message": "Error message"
}
```

---

# Authentication API

## POST /auth/register

## POST /auth/login

## POST /auth/logout

## GET /auth/me

---