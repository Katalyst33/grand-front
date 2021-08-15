export type userForm = {
  confirm?: string;
  password?: string;
  repeat_password?: string;
  email?: string;
};

export type axiosResponse = {
  data?: object;
  proceed: boolean;
  message?: string;
  error?: string;
};
