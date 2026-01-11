import { api } from '@/lib/api';
import { SignupRequest, SignupResponse, LoginRequest, LoginResponse, ApiError } from '@/types/auth';

export const authService = {
  async signup(data: SignupRequest): Promise<SignupResponse> {
    try {
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('confirmPassword', data.confirmPassword);
      formData.append('phone', data.phone);
      formData.append('address', data.address);
      formData.append('gender', data.gender);
      formData.append('latitude', data.latitude.toString());
      formData.append('longitude', data.longitude.toString());
      
      if (data.profileImage) {
        formData.append('profileImage', data.profileImage);
      }

      const response = await api.post<SignupResponse>('/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        throw error.response.data as ApiError;
      }
      throw {
        success: false,
        message: 'Network error. Please try again.'
      } as ApiError;
    }
  },

  async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await api.post<LoginResponse>('/auth/login', data);
      return response.data;
    } catch (error: any) {
      if (error.response?.data) {
        throw error.response.data as ApiError;
      }
      throw {
        success: false,
        message: 'Network error. Please try again.'
      } as ApiError;
    }
  }
};