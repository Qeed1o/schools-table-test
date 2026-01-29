<template>
  <UButton
    :class="type"
    :label="label"
    :variant="type === 'secondary' ? 'outline' : 'solid'"
    :color="type === 'secondary' ? 'neutral' : 'primary'"
    :size="size"
    :icon="icon"
    :trailing-icon="trailingIcon"
    :ui="ui"
  >
    <slot />
  </UButton>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import type { UiProps } from '~/types'

withDefaults(defineProps<{
  label?: ButtonProps['label']
  icon?: ButtonProps['icon']
  type?: 'accent' | 'primary' | 'secondary'
  size?: ButtonProps['size']
  ui?: UiProps<'base' | 'label'>
  trailingIcon?: ButtonProps['trailingIcon']
}>(), { type: 'accent' })
</script>

<style scoped>
    .primary {
        transition: background-color .3s ease-out;
        background-color: #0E0E10;
        color: white;
    }
    .primary:hover {
        background-color: #24C14E;
        color: #0E0E10;
    }
    .primary:active {
        background-color: #16B240;
    }

    .secondary {
        transition: background-color .3s ease-out;
        margin: 1px;
    }
    .secondary:hover {
        margin: 0;
        border: 1px solid #0E0E10;
    }
    .secondary:active {
        background-color: #F0F0F7;
        color: #0E0E10;
    }

    .accent {
        transition: background-color .3s ease-out;
        background-color: #33D35E;
    }
    .accent:hover {
        background-color: #24C14E;
    }
    .accent:active {
        background-color: #16B240;
    }
</style>
