export interface IAuthState {
  token: any;
  loading: any;
  refreshToken: any;
}

export interface IAuthMe {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  system_user_type: string;
  _id: any;
  user?: any;
}
