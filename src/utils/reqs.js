import axios from "axios";

// eslint-disable-next-line no-undef
const server_url = "http://localhost:4444";

export const reqLogin = async ({ email, password }) => {
  const res = await axios.post(
    `${server_url}/auth/signin`,
    {
      email,
      password,
    },
    { withCredentials: true, headers: { "Access-Control-Allow-Origin": "*" } }
  );

  return res.data;
};

export const reqRegister = async ({ name, email, password }) => {
  const res = await axios.post(`${server_url}/auth/signup`, {
    name,
    email,
    password,
  });

  return res.data;
};

export const authTest = async () => {
  const res = await axios.get(`${server_url}/auth/test`, {
    withCredentials: true,
  });

  return res.data;
};
export const signOut = async () => {
  const res = await axios.get(`${server_url}/auth/signout`, {
    withCredentials: true,
  });

  return res.data;
};

export const reqProfile = async (uid) => {
  const res = await axios.get(`${server_url}/api/users/${uid}`, {
    withCredentials: true,
  });

  return res.data;
};

export const updateUser = async (uid, pl) => {
  const res = await axios.put(`${server_url}/api/users/${uid}`, pl, {
    withCredentials: true,
  });

  return res.data;
};
export const reqAllUsers = async () => {
  const res = await axios.get(`${server_url}/api/users`, {
    withCredentials: true,
  });

  return res.data;
};

export const reqAllMsgs = async (rid) => {
  const res = await axios.post(
    `${server_url}/api/msg`,
    { roomId: rid },
    {
      withCredentials: true,
    }
  );

  return res.data;
};
