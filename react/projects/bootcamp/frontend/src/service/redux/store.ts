import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slice/auth"
import { authApi } from "@/service/api/auth"
import { profileApi } from "../api/profile"
import profileReducer from "./slice/profile"
import { courseApi } from "../api/course"
import { bootcampApi } from "../api/bootcamp"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    profile: profileReducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [bootcampApi.reducerPath]: bootcampApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      profileApi.middleware,
      courseApi.middleware,
      bootcampApi.middleware
    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
