export interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  gender: string;
  profileImage?: File;
  latitude: number;
  longitude: number;
}

export interface SignupResponse {
  message: string;
  userId: number;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  userId: number;
  role: string;
  businessId: number | null;
  fullName: string;
  accountType: string;
}