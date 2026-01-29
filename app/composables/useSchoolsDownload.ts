import { shallowRef, computed } from 'vue'
import type { DateValue } from '@internationalized/date'
import type { Region, ApiResponse, SchoolsResponse } from '~/types'

export const useSchoolsDownload = (
  region: Ref<Region | undefined>,
  pagination: Ref<{ pageIndex: number, pageSize: number }>,
  calendar: Ref<{ start: DateValue | undefined, end: DateValue | undefined }>
) => {
  const query = shallowRef<{
    count: number
    page: number
    region_id?: number
    updated_at?: string
    download: boolean
  }>({
    count: pagination.value.pageSize,
    page: pagination.value.pageIndex,
    region_id: region.value?.id,
    updated_at: dateValueToYmd(calendar.value.start),
    download: false
  })

  const { BASE_API_URL } = useRuntimeConfig().public
  const { status, execute } = useFetch<ApiResponse<SchoolsResponse>>(
    `${BASE_API_URL}schools`, {
      key: 'schools-download',
      query: computed(() => query.value),
      retry: 0,
      immediate: false
    }
  )

  const isLoading = computed(() => status.value === 'pending')

  const download = () => {
    query.value.download = true
    execute()
  }

  return { download, status, isLoading }
}
