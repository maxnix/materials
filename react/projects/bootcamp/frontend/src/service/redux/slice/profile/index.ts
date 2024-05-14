import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SimplifiedProfile } from "@/service/api/profile/parser"
import { profileApi } from "@/service/api/profile"

interface ProfileState {
  profile: SimplifiedProfile | null
}

const initialState: ProfileState = {
  profile: null,
}

const profileSlice = createSlice({
  name: `profile`,
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<SimplifiedProfile>) => {
      state.profile = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      profileApi.endpoints.getProfile.matchFulfilled,
      (state, action) => {
        state.profile = action.payload
      }
    )
  },
})

export default profileSlice.reducer
