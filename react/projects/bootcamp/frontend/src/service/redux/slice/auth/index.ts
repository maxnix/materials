import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode"
import { authApi } from "@/service/api/auth"

interface AuthState {
  token: string | null
  username: string | null
}

const initialState: AuthState = {
  token: null,
  username: null,
}

type JWTDecodePayload = {
  id: string
  iat: number
  exp: number
}

const authSlice = createSlice({
  name: `auth`,
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
      if (action.payload) localStorage.setItem(`token`, action.payload)
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    logout(state) {
      state.token = null
      state.username = null
      authApi.util.invalidateTags([`Auth`])
      localStorage.removeItem(`token`)
    },
    authInit(state) {
      const token = localStorage.getItem(`token`)
      if (token) {
        const decodedToken = jwtDecode<JWTDecodePayload>(token)
        if (decodedToken.exp * 1000 < Date.now()) {
          state.token = null
          state.username = null
          localStorage.removeItem(`token`)
          return
        }
        state.token = token
        state.username = decodedToken.id
      }
    },
  },
})

export const { setToken, setUsername, authInit, logout } = authSlice.actions
export default authSlice.reducer
