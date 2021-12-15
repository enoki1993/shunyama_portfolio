declare type BlogContent = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  category: Category[]
}

declare type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

declare type BlogResponseData = {
  contents: BlogContent[]
  totalCount: number
  offset: number
  limit: number
}
