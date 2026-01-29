<template>
  <UTable
    ref="table"
    v-model:row-selection="rowSelection"
    by="uuid"
    :loading="loading"
    :data="Array.isArray(data) ? data : data.list"
    :columns="columns"
    :ui="ui"
    @select="onSelect"
  />
</template>

<script setup lang="ts">
import type { TableColumn, TableData, TableRow } from '@nuxt/ui'
import type { ApiListResponse, UiProps } from '~/types'

defineProps<{
  // По-хорошему здесь должен быть какой-то тип, но чёт не завелось с TableData или unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: TableColumn<any>[]
  data: ApiListResponse | unknown[]
  loading?: boolean
  ui?: UiProps<'thead' | 'root' | 'td'>
}>()

const rowSelection = ref<Record<string, boolean>>({})
const onSelect = (e: Event, row: TableRow<TableData>) => row.toggleSelected(!row.getIsSelected())

const table = useTemplateRef('table')
const toggleAllPageRowsSelected = computed(() => table.value?.tableApi?.toggleAllPageRowsSelected ?? new Function())
defineExpose({ toggleAllPageRowsSelected })
</script>
