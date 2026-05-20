# Website Quản Lý Công Việc Cá Nhân

Website hỗ trợ người dùng quản lý công việc hằng ngày với các chức năng tạo, chỉnh sửa, theo dõi tiến độ và quản lý deadline công việc.

## Chức năng chính

- Đăng ký, đăng nhập, đăng xuất
- Protected Route
- CRUD công việc
- Cập nhật trạng thái công việc
- Drag & Drop sắp xếp công việc
- Dashboard thống kê
- Search, filter và pagination
- Responsive trên Desktop, Tablet và Mobile

## Công nghệ sử dụng

### Frontend
- ReactJS
- JavaScript
- HTML/CSS
- Axios

### Backend
- NodeJS
- ExpressJS

### Database
- MongoDB
- Mongoose

### Công cụ hỗ trợ
- GitHub
- Postman
- Visual Studio Code

## Cấu trúc dữ liệu

### User
```json
{
  "username": "String",
  "password": "String"
}
```

### Task
```json
{
  "title": "String",
  "description": "String",
  "deadline": "Date",
  "priority": "low | medium | high",
  "status": "todo | doing | done",
  "order": "Number"
}
```

## API

### Authentication
```http
POST /auth/register
POST /auth/login
POST /auth/logout
GET /auth/me
```

### Tasks
```http
GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id
PATCH /tasks/:id/status
PATCH /tasks/reorder
```

### Dashboard
```http
GET /dashboard/summary
```

## Cài đặt dự án

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Thành viên nhóm

- Người 1: Authentication & UI Foundation
- Người 2: Task Management Module
- Người 3: Backend, Database & Deployment
