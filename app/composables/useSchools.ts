import type { ApiResponse, FederalDistrict, Region, School, SchoolsResponse } from '~/types'
import UBadge from '@nuxt/ui/components/Badge.vue'
import type { TableColumn } from '@nuxt/ui'
import type { DateValue } from '@internationalized/date'

interface PaginationState {
  pageIndex: number
  pageSize: number
}

export const useSchools = (region: Ref<Region | undefined>, federalDistrict: Ref<FederalDistrict | undefined>) => {
  const { BASE_API_URL } = useRuntimeConfig().public
  const pagination = ref<PaginationState>({
    pageIndex: 1,
    pageSize: 5
  })
  const search = ref<string>('')
  const calendar = shallowRef<{ start: DateValue | undefined, end: DateValue | undefined }>({
    start: undefined,
    end: undefined
  })

  const { data, status } = useFetch<ApiResponse<SchoolsResponse>>(`${BASE_API_URL}schools`, {
    key: 'schools',
    query: computed(() => ({
      count: pagination.value.pageSize,
      page: pagination.value.pageIndex,
      region_id: region.value?.id ?? undefined,
      federal_district_id: federalDistrict.value?.id ?? undefined,
      updated_at: dateValueToYmd(calendar.value.start)
    })),
    retry: 0
  })
  const schoolsData = computed<SchoolsResponse>(() => {
    if (data.value?.data) {
      const list = data.value.data.list
        .map(addIdSchools)
        .filter(schoolSearchFilter(search.value))
      return { ...data.value.data, list }
    }
    return { list: [], page: 0, pages_count: 0, total_count: 0 }
  })

  const isLoading = computed(() => status.value === 'pending')

  return { data: schoolsData, isLoading, pagination, columns, search, calendar }
}

const columns: TableColumn<School>[] = [
  {
    id: 'select',
    header: ({ table }) => createCheckbox(
      table.getIsSomePageRowsSelected()
        ? 'indeterminate'
        : table.getIsAllPageRowsSelected(),
      (value: boolean | 'indeterminate') => table.toggleAllPageRowsSelected(!!value),
      'Select all'
    ),
    cell: ({ row }) => createCheckbox(
      row.getIsSelected(),
      (value: boolean | 'indeterminate') => row.toggleSelected(!!value),
      'Select row'
    )
  },
  {
    accessorKey: 'edu_org.region.name',
    header: ({ column }) => createSortableHeader('Регион', column)
  },
  {
    accessorKey: 'edu_org.short_name',
    header: ({ column }) => createSortableHeader('Название', column)
  },
  {
    accessorKey: 'edu_org.contact_info.post_address',
    header: ({ column }) => createSortableHeader('Адрес', column)
  },
  {
    id: 'education_level',
    accessorKey: 'supplements',
    cell: ({ row }) => {
      const badges = getEducationLevelBadges(row.getValue('education_level') as School['supplements'])
      return h(
        'div',
        { class: 'flex gap-1 w-3xs flex-wrap' },
        badges.map(label => h(UBadge, { class: 'capitalize min-w-min', variant: 'outline', color: 'neutral', label }))
      )
    },
    header: ({ column }) => createSortableHeader('Уровень образования', column)
  }
]
