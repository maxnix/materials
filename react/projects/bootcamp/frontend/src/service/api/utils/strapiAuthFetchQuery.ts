import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "@/service/redux/store"

export const strapiAuthFetchQuery = fetchBaseQuery({
  baseUrl: `http://localhost:1337/api`,
  headers: {
    "Content-Type": `application/json`,
  },
  credentials: `include`,
  prepareHeaders: (headers, { getState }) => {
    const { token } = (getState() as RootState).auth
    if (token) {
      headers.set(`Authorization`, `Bearer ${token}`)
    }
    return headers
  },
})
