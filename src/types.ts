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

export type loggedUser = {
  email: string;
  role: string;
};

export type appInfo = {
  companyName: string;
  contact: {
    phone?: string;
    email?: string;
    address?: string;
  };
};

export type DealsData = {
  country: string;
  countryCode: string;
  createdAt: Date;
  description: string;
  enabled: boolean;
  expiresIn: Date;
  included: [];
  price: number;
  title: string;
  updatedAt: string;
  _id: string;
  uuid: string;
};
