import axiosClient from "./axiosClient";

export const taskApi = {
  getTasks: (search = "") => {
  return axiosClient.get(
    `/tasks?search=${search}`
  );
},

  createTask: (data) => {
    return axiosClient.post(
      "/tasks",
      data
    );
  },

  updateTask: (id, data) => {
    return axiosClient.put(
      `/tasks/${id}`,
      data
    );
  },

  updateTaskStatus: (
    id,
    status
  ) => {
    return axiosClient.patch(
      `/tasks/${id}/status`,
      {
        status,
      }
    );
  },

  deleteTask: (id) => {
    return axiosClient.delete(
      `/tasks/${id}`
    );
  },
};