import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../redux/store"

export const strapiBaseFetchQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_STRAPI_API_URL as string,
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
