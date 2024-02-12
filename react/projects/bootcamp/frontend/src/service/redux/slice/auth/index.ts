import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode"
import { authApi } from "../../../api/auth"
import { JWTDecodePayload } from "../../../api/auth/types"

interface AuthState {
  token: string | null
  username: string | null
}

const initialState: AuthState = {
  token: null,
  username: null,
}

const authSlice = createSlice({
  name: `auth`,
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
      // @todo: write a middleware to return as httpOnly cookie
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
        const decodedToken = jwtDecode<JWTDecodePayload>(token || ``)
        if (decodedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem(`token`)
          state.token = null
          state.username = null
          return
        }
        state.token = token
        state.username = decodedToken.id
      }
      state.token = localStorage.getItem(`token`)
    },
  },
})

export const { setToken, setUsername, logout, authInit } = authSlice.actions
export default authSlice.reducer
