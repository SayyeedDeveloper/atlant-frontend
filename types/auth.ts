// User interface
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile_picture?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Register data
export interface RegisterData {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
}

// Login data
export interface LoginData {
  email: string;
  password: string;
}

// Auth response
export interface AuthResponse {
  user: User;
  access: string;
  refresh: string;
}

// Token refresh response
export interface RefreshTokenResponse {
  access: string;
}