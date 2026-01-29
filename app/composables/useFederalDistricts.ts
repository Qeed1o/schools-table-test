import type { ApiResponse, FederalDistrict } from '~/types'

export const useFederalDistricts = () => {
  const { BASE_API_URL } = useRuntimeConfig().public
  const { data, status } = useFetch<ApiResponse<FederalDistrict[]>>(`${BASE_API_URL}federalDistricts`, {
    key: 'federal-districts'
  })

  const federalDistrict = ref<FederalDistrict | undefined>()

  const federalDistricts = computed(() => data.value?.data ?? [])
  const isLoading = computed(() => status.value === 'pending')

  return { data: federalDistricts, isLoading, federalDistrict }
}
