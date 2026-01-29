export interface ApiListResponse<T = unknown> {
  pages_count: number
  page: number
  total_count: number
  list: T[]
}
