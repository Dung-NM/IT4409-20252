import { FAKE_USER } from "../mocks/fakeAuth";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const authApi = {
  login: async ({ username, password }) => {
    await delay(300);

    // chỉ cho 1 user duy nhất
    if (
      username !== FAKE_USER.username ||
      password !== FAKE_USER.password
    ) {
      throw new Error("Invalid credentials");
    }

    return {
      data: {
        success: true,
        data: {
          user: {
            id: FAKE_USER.id,
            username: FAKE_USER.username,
            role: FAKE_USER.role,
          },
          accessToken: "fake-admin-token",
        },
      },
    };
  },

  register: async () => {
    await delay(300);

    // fake register luôn thành công nhưng không tạo user mới
    return {
      data: {
        success: true,
        message: "Demo mode: user fixed (admin only)",
      },
    };
  },

  logout: async () => {
    await delay(100);
    return { data: { success: true } };
  },

  me: async () => {
    const token = localStorage.getItem("token");

    if (!token) throw new Error("No token");

    return {
      data: {
        success: true,
        data: {
          id: FAKE_USER.id,
          username: FAKE_USER.username,
          role: FAKE_USER.role,
        },
      },
    };
  },
};