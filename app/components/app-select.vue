<template>
  <USelectMenu
    v-model="model"
    :loading="loading"
    :items="items"
    :search-input="false"
    :selected-icon="'-'"
    :label-key="labelKey"
    :clear="clear"
    :size="size"
    :placeholder="placeholder"
    :ui="{
      item: 'rounded-lg bg-[#E4E4EE] px-2 py-1 mb-1 menu-item',
      content: 'min-w-min',
      base: 'hover:bg-[#F1F4FD]',
      value: 'color-[#93939B]',
      ...ui
    }"
  />
</template>

<script setup lang="ts">
import type { SelectMenuItem, SelectMenuProps } from '@nuxt/ui'

const model = defineModel<SelectMenuItem>()

defineProps<{
  loading?: SelectMenuProps['loading']
  items?: SelectMenuProps['items']
  ui?: SelectMenuProps['ui']
  labelKey?: SelectMenuProps['labelKey']
  clear?: SelectMenuProps['clear']
  placeholder?: SelectMenuProps['placeholder']
  size?: SelectMenuProps['size']
}>()
</script>
