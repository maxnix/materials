export interface SignupResponse {
  jwt: string
  user: {
    id: string
    username: string
    email: string
  }
}

export interface SignupCredentials {
  username: string
  email: string
  password: string
}

export interface Credentials {
  username: string
  email: string
  password: string
}

export interface LoginCredentials {
  identifier: string
  password: string
}

export interface AdminLoginCredentials {
  email: string
  password: string
}

export interface LoginResponse extends SignupResponse {}

export type JWTDecodePayload = {
  id: string
  iat: number
  exp: number
}

export type SignupErrorResponse = {
  data: {
    data: null
    error: {
      status: number
      name: string
      message: string
      datails: Record<string, unknown>
    }
  }
}

export type ForgotPasswordRequest = {
  email: string
}

export type ForgotPasswordResponse = {
  ok: boolean
}

export type ResetPasswordRequest = {
  code: string
  password: string
  passwordConfirmation: string
}

export type ResetPasswordResponse = SignupResponse
