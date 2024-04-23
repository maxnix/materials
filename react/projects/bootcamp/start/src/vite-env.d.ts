/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_STRAPI_API_URL: string
  VITE_STRAPI_URL: string
}

interface ImportMeta {
  env: ImportMetaEnv
}
