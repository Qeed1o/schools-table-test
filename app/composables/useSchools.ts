import type { ApiResponse, School, SchoolsResponse } from '~/types'
import UCheckbox from '@nuxt/ui/components/Checkbox.vue'
import UBadge from '@nuxt/ui/components/Badge.vue'
import UButton from '@nuxt/ui/components/Button.vue'
import type { TableColumn, TableRow } from '@nuxt/ui'

interface PaginationState {
  pageIndex: number
  pageSize: number
}

export const useSchools = () => {
  const pagination = ref<PaginationState>({
    pageIndex: 1,
    pageSize: 5
  })

  const { data, status } = useFetch<ApiResponse<SchoolsResponse>>('https://schooldb.skillline.ru/api/schools', {
    key: 'schools',
    query: computed(() => ({
      count: pagination.value.pageSize,
      page: pagination.value.pageIndex
    })),
    retry: 0
  })
  const schoolsData = computed<SchoolsResponse>(() => data.value?.data ?? { list: [], page: 0, pages_count: 0, total_count: 0 })

  const rowSelection = ref<Record<string, boolean>>({})
  const onSelect = (e: Event, row: TableRow<School>) => {
    row.toggleSelected(!row.getIsSelected())
  }

  return { data: schoolsData, status, pagination, columns, onSelect, rowSelection }
}

const columns: TableColumn<School>[] = [
  {
    id: 'select',
    header: ({ table }) => h(UCheckbox, {
      'modelValue': table.getIsSomePageRowsSelected()
        ? 'indeterminate'
        : table.getIsAllPageRowsSelected(),
      'onUpdate:modelValue': (value: boolean | 'indeterminate') =>
        table.toggleAllPageRowsSelected(!!value),
      'aria-label': 'Select all',
      'ui': {
        indicator: 'bg-[#1B1B1F]',
        base: 'bg-[#D3D3DE] rounded-none'
      }
    }),
    cell: ({ row }) =>
      h(UCheckbox, {
        'modelValue': row.getIsSelected(),
        'onUpdate:modelValue': (value: boolean | 'indeterminate') => row.toggleSelected(!!value),
        'aria-label': 'Select row',
        'ui': {
          indicator: 'bg-[#1B1B1F]',
          base: 'bg-[#D3D3DE] rounded-none'
        }
      })
  },
  {
    accessorKey: 'edu_org.region.name',
    header: ({ column }) => {
      const isSorted = column.getIsSorted()
      return h(UButton, {
        class: 'w-full flex justify-between hover:bg-[#F0F0F7]',
        ui: {
          label: 'text-base font-bold transition duration-300 ease-in-out text-[#55555C] hover:text-[#0E0E10]'
        },
        color: 'neutral',
        variant: 'ghost',
        label: 'Регион',
        trailingIcon: isSorted
          ? isSorted === 'asc'
            ? 'app:sort-asc'
            : 'app:sort-desc'
          : 'app:unsorted',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
      })
    }
  },
  {
    accessorKey: 'edu_org.short_name',
    header: ({ column }) => {
      const isSorted = column.getIsSorted()
      return h(UButton, {
        class: 'w-full flex justify-between hover:bg-[#F0F0F7]',
        ui: {
          label: 'text-base font-bold transition duration-300 ease-in-out text-[#55555C] hover:text-[#0E0E10]'
        },
        color: 'neutral',
        variant: 'ghost',
        label: 'Название',
        trailingIcon: isSorted
          ? isSorted === 'asc'
            ? 'app:sort-asc'
            : 'app:sort-desc'
          : 'app:unsorted',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
      })
    }
  },
  {
    accessorKey: 'edu_org.contact_info.post_address',
    header: ({ column }) => {
      const isSorted = column.getIsSorted()
      return h(UButton, {
        class: 'w-full flex justify-between hover:bg-[#F0F0F7]',
        ui: {
          label: 'text-base font-bold transition duration-300 ease-in-out text-[#55555C] hover:text-[#0E0E10]'
        },
        color: 'neutral',
        variant: 'ghost',
        label: 'Адрес',
        trailingIcon: isSorted
          ? isSorted === 'asc'
            ? 'app:sort-asc'
            : 'app:sort-desc'
          : 'app:unsorted',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
      })
    }
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
    header: ({ column }) => {
      const isSorted = column.getIsSorted()
      return h(UButton, {
        class: 'w-full flex justify-between hover:bg-[#F0F0F7]',
        ui: {
          label: 'text-base font-bold transition duration-300 ease-in-out text-[#55555C] hover:text-[#0E0E10]'
        },
        color: 'neutral',
        variant: 'ghost',
        label: 'Уровень образования',
        trailingIcon: isSorted
          ? isSorted === 'asc'
            ? 'app:sort-asc'
            : 'app:sort-desc'
          : 'app:unsorted',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
      })
    }
  }
]
