import { createSlice } from "@reduxjs/toolkit"
import { profileApi } from "@/service/api/profile"

interface ProfileState {
  username: string | null
  email: string | null
  blocked: boolean | null
  confirmed: boolean | null
  createdAt: string | null
  id: number | null
  provider: string | null
  updatedAt: string | null
}

const initialState: ProfileState = {
  username: null,
  email: null,
  blocked: null,
  confirmed: null,
  createdAt: null,
  id: null,
  provider: null,
  updatedAt: null,
}

const profileSlice = createSlice({
  name: `profile`,
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload
    },
    setEmail(state, action) {
      state.email = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      profileApi.endpoints.getProfile.matchFulfilled,
      (state, action) => {
        state.username = action.payload.username
        state.email = action.payload.email
        state.blocked = action.payload.blocked
        state.confirmed = action.payload.confirmed
        state.createdAt = action.payload.createdAt
        state.id = action.payload.id
        state.provider = action.payload.provider
        state.updatedAt = action.payload.updatedAt
      }
    )
  },
})

export const { setUsername, setEmail } = profileSlice.actions
export default profileSlice.reducer
