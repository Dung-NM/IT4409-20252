import axiosClient from "./axiosClient";

export const authApi = {
  login: async ({
    username,
    password,
  }) => {
    const res =
      await axiosClient.post(
        "/auth/login",
        {
          username,
          password,
        }
      );

    return {
      data: {
        success: true,
        data: {
          user: {
            _id: res.data._id,
            name: res.data.name,
            username: res.data.username,
          },
          accessToken:
            res.data.token,
        },
      },
    };
  },

  register: async ({
    name,
    username,
    password,
  }) => {
    return await axiosClient.post(
      "/auth/register",
      {
        name,
        username,
        password,
      }
    );
  },

  logout: async () => {
    localStorage.removeItem(
      "token"
    );

    return {
      data: {
        success: true,
      },
    };
  },

  me: async () => {
    const res =
      await axiosClient.get(
        "/auth/me"
      );

    return {
      data: {
        success: true,
        data: res.data,
      },
    };
  },
};