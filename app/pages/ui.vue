<template>
  <div class="flex flex-col gap-5">
    <div class="flex gap-3">
      <app-button label="Accent" />
      <app-button
        type="primary"
        label="Primary"
      />
      <app-button
        type="secondary"
        label="Secondary"
        icon="app:download"
      />
    </div>

    <div class="flex gap-3">
      <app-input
        placeholder="Input"
        class="flex-1"
      />
      <app-popover-calendar class="flex-1" />
      <app-select
        :items="['one', 'two', 'three']"
        class="flex-1"
      />
    </div>

    <app-table
      :data="[{
        id: 1,
        name: 'Test',
        age: 10,
        city: 'Test City'
      }, {
        id: 2,
        name: 'Test 2',
        age: 20,
        city: 'Test City 2'
      }]"
      :columns="columns"
    />

    <app-table-pagination
      :current-page="1"
      :total-pages="10"
      :page-size-options="[5, 10]"
      :data="{
        page: 1,
        total_count: 1000
      }"
      with-page-size
    />
  </div>
</template>

<script lang="ts" setup>
import type { TableColumn } from '@nuxt/ui'
import { createSortableHeader } from '~/utils/createSortableHeader'

const columns: TableColumn<unknown>[] = [
  { accessorKey: 'id', header: () => createSortableHeader('ID', { getIsSorted: () => false, toggleSorting: () => {} }) },
  { accessorKey: 'name', header: () => createSortableHeader('Name', { getIsSorted: () => false, toggleSorting: () => {} }) },
  { accessorKey: 'age', header: () => createSortableHeader('Age', { getIsSorted: () => false, toggleSorting: () => {} }) },
  { accessorKey: 'city', header: () => createSortableHeader('City', { getIsSorted: () => false, toggleSorting: () => {} }) }
]
</script>
