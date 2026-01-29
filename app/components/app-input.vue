<template>
  <UInput
    class="app-input"
    :trailing-icon="trailingIcon"
    :placeholder="placeholder"
    :size="size"
    :ui="ui"
  />
</template>

<script setup lang="ts">
import type { InputProps } from '@nuxt/ui'

defineProps<{
  size?: InputProps['size']
  placeholder?: InputProps['placeholder']
  icon?: InputProps['icon']
  trailingIcon?: InputProps['trailingIcon']
  ui?: InputProps['ui']
}>()
</script>
