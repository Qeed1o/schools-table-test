<template>
  <UTable
    :data="data"
    :columns="columns"
  />
</template>

<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { School } from '~/types'

const { data } = defineProps<{
  data: School[]
  columns: TableColumn<School>[]
}>()

console.log(data)
</script>
