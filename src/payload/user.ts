export interface UserDetail {
  id: number;
  email: string;
  name: string;
}

export interface UserJoinForm {
  email: string;
  name: string;
  password: string;
}

export interface UserUpdateForm {
  email: string;
  password: string;
  name: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface UserSummary {
  idx: number;
  email: string;
  name: string;
}
