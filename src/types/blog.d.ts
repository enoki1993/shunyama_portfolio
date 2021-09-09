declare interface BlogContent {
	id: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	revisedAt: string
	title: string
	body: string
}

declare interface BlogResponseData {
	contents: BlogContent[]
	totalCount: number
	offset: number
	limit: number
}
