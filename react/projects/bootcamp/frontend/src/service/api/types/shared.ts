export type SingleImageType = {
  attributes: {
    alternativeText: null | string
    caption: null | string
    createdAt: string
    ext: string
    formats: Record<ForkatTypeKey, FormatType>
    hash: string
    height: number
    mime: string
    name: string
    previewUrl: null | string
    provider: string
    provider_metadata: null | any // Define the structure if known
    size: number
    updatedAt: string
    url: string
    width: number
  }
  id: number
}

export type FormatType = {
  ext: string
  hash: string
  height: number
  mime: string
  name: string
  path: null | string
  size: number
  url: string
  width: number
}

export type ForkatTypeKey = "thumbnail" | "large" | "small" | "medium"
