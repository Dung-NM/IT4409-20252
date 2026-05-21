import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const {
      status,
      priority,
      search,
    } = req.query;

    const query = {
      user: req.user._id,
    };

    if (status) {
      query.status = status;
    }

    if (priority) {
      query.priority = priority;
    }

    if (search) {
      query.title = {
        $regex: search,
        $options: "i",
      };
    }

    const tasks = await Task.find(query)
      .sort({
        createdAt: -1,
      });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTaskById = async (
  req,
  res
) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createTask = async (
  req,
  res
) => {
  try {
    const {
      title,
      description,
      priority,
      deadline,
    } = req.body;

    if (!title?.trim()) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    const task = await Task.create({
      title,
      description,
      priority,
      deadline,
      user: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTask = async (
  req,
  res
) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (
      req.body.title !== undefined &&
      !req.body.title.trim()
    ) {
      return res.status(400).json({
        message: "Title cannot be empty",
      });
    }

    task.title =
      req.body.title ?? task.title;

    task.description =
      req.body.description ??
      task.description;

    task.priority =
      req.body.priority ??
      task.priority;

    task.deadline =
      req.body.deadline ??
      task.deadline;

    task.status =
      req.body.status ??
      task.status;

    const updatedTask =
      await task.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTaskStatus =
  async (req, res) => {
    try {
      const task =
        await Task.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!task) {
        return res.status(404).json({
          message:
            "Task not found",
        });
      }

      const validStatus = [
        "todo",
        "doing",
        "done",
      ];

      if (
        !validStatus.includes(
          req.body.status
        )
      ) {
        return res.status(400).json({
          message:
            "Invalid status",
        });
      }

      task.status =
        req.body.status;

      const updatedTask =
        await task.save();

      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

export const deleteTask = async (
  req,
  res
) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    await task.deleteOne();

    res.json({
      message:
        "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};