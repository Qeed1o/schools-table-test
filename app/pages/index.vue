<template>
  <div class="w-full space-y-4 pb-4">
    <UTable
      ref="table"
      v-model:row-selection="rowSelection"
      :loading="isLoading"
      :data="data.list"
      :columns="columns"
      :ui="{
        thead: 'bg-[#F0F0F7]',
        root: 'mb-0',
        td: 'max-w-md whitespace-break-spaces'
      }"
      @select="onSelect"
    />
    <div class="flex justify-between border-t border-default pt-4 px-4">
      <UPagination
        v-model:page="pagination.pageIndex"
        :items-per-page="pagination.pageSize"
        :loading="isLoading"
        :total="data.total_count"
        :sibling-count="1"
        active-color="neutral"
        variant="ghost"
        show-edges
        :ui="{
          first: 'hidden',
          last: 'hidden',
          next: 'border border-[#D3D3DE] rounded-lg ml-4',
          prev: 'border border-[#D3D3DE] rounded-lg mr-4',
          item: 'pagination-item'
        }"
      />
      <div class="flex gap-8 font-normal text-[#687588] text-sm items-center">
        <span>{{ itemsOnPageText }} из {{ data.total_count }} записей</span>
        <div class="flex gap-1 items-center">
          <span>Показывать</span>
          <USelectMenu
            v-model="pagination.pageSize"
            :loading="isLoading"
            :items="[5, 10, 20, 30, 40, 50]"
            :search-input="false"
            :selected-icon="'-'"
            :ui="{
              item: 'rounded-lg bg-[#E4E4EE] px-2 py-1 mb-1 menu-item',
              content: 'min-w-min',
              base: 'hover:bg-[#F1F4FD]',
              value: 'color-[#93939B]'
            }"
            @update:model-value="pagination.pageIndex = 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const table = useTemplateRef('table')
const { data, status, pagination, columns, rowSelection, onSelect } = useSchools()

watch(pagination.value, () => table.value?.tableApi.toggleAllPageRowsSelected(false))

const itemsOnPageText = computed(() => {
  const base = (data.value.page - 1) * pagination.value.pageSize
  return `${base} - ${base + pagination.value.pageSize}`
})

const isLoading = computed(() => status.value === 'pending')
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
