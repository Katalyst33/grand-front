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

export type DealData = {
  activity: string;
  country: string;
  enabled: boolean;
  promoted: boolean;
  description: string;
  duration: {
    start: Date;
    end: Date;
  };
  included: string;
  price: number;
  title: string;
  uuid: string;
  image: string;
};
