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
  uuid: string;
};

export type appInfo = {
  companyName: string;
  contact: {
    phone?: string;
    email?: string;
    address?: string;
  };
};

export type profileTypes = {
  images: Object;
  ownerId: string;
  comment: string;
  reference: string;
  contactInformation: {
    email: string;
    houseNumber: string;
    street: string;
    address: string;
    postalCode: string;
    city: string;
    phoneNumber: string;
    country: string;
  };
  personalInformation: {
    firstName: string;
    lastName: string;
    middleName: string;
    gender: string;
    birthName: string;
    birth_day: string;
    nationality: string;
    place_of_birth: string;
  };
  otherInformation: Object;
  EducationInfo: Object;
};

export type appStateTypes = {
  data: appInfo;
  user: loggedUser;
  showMobileMenu: boolean;
  showCart: boolean;
  isDev: boolean;
  isLoaded: boolean;
  sidebarOpen: boolean;
};

export type DestinationType = {
  activity: string;
  country: {
    name: string;
    code: string;
  };
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
  _id?: string;
};

export type CountryType = {
  name: string;
  code: string;
};

export type ProfileType = {
  images: [];
  docs: [];
  user: {};
};
