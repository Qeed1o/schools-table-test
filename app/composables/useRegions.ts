import type { ApiResponse, Region } from '~/types'

export const useRegions = () => {
  const { BASE_API_URL } = useRuntimeConfig().public
  const region = ref<Region>()
  const { data, status } = useFetch<ApiResponse<Region[]>>(`${BASE_API_URL}regions`, {
    key: 'regions'
  })

  const isLoading = computed(() => status.value === 'pending')

  return { data: data.value?.data ?? [] as Region[], isLoading, region }
}
