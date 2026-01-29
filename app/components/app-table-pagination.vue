<template>
  <div class="flex flex-col-reverse items-center justify-between border-t border-default pt-4 lg:px-4 lg:flex-row">
    <UPagination
      v-model:page="pagination.pageIndex"
      :items-per-page="pagination.pageSize"
      :loading="loading"
      :total="data?.total_count"
      :sibling-count="1"
      active-color="neutral"
      variant="ghost"
      show-edges
      :ui="{
        first: 'hidden',
        last: 'hidden',
        next: 'border border-[#D3D3DE] rounded-lg ml-2 md:ml-4',
        prev: 'border border-[#D3D3DE] rounded-lg mr-2 md:mr-4',
        item: 'pagination-item'
      }"
    />
    <div
      v-if="withPageSize"
      class="flex gap-4 font-normal text-[#687588] text-sm items-center mb-4 md:mb-0"
    >
      <span v-if="data">{{ pageSizeText }} из {{ data.total_count }} записей</span>
      <div class="flex gap-1 items-center">
        <span>Показывать</span>
        <app-select
          v-model="pagination.pageSize"
          :loading="loading"
          :items="pageSizeOptions"
          @update:model-value="pagination.pageIndex = 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pagination = defineModel<{ pageIndex: number, pageSize: number }>('pagination', { default: { pageIndex: 1, pageSize: 10 } })

const props = withDefaults(defineProps<{
  loading?: boolean
  data?: { page: number, total_count: number }
  pageSizeOptions: number[]
  withPageSize?: boolean
}>(), {
  withPageSize: false
})

const pageSizeText = computed(() => {
  if (!props.data) return ''
  const base = (props.data.page - 1) * pagination.value.pageSize
  return `${base} - ${base + pagination.value.pageSize}`
})
</script>

<style>
  .menu-item[data-state=checked] span[data-slot=itemLabel] {
    color: #93939B;
  }

  .pagination-item {
    color: #0E0E10;
  }
  .pagination-item[data-selected=true] {
    background-color: #F0F0F7;
  }
</style>
