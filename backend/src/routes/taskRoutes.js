import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getTasks)
  .post(protect, createTask);

router
  .route("/:id")
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

router.patch(
  "/:id/status",
  protect,
  updateTaskStatus
);

export default router;