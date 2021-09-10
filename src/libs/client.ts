import { createClient } from "microcms-js-sdk"

export const client = createClient({
	serviceDomain: 'shunyama',
	apiKey: process.env.API_KEY ? process.env.API_KEY : "",
})
