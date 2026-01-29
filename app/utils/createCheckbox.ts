import { h } from 'vue'
import { UCheckbox } from '#components'

export const createCheckbox = (modelValue: boolean | 'indeterminate', onUpdate: (value: boolean | 'indeterminate') => void, ariaLabel: string) =>
  h(UCheckbox, {
    modelValue,
    'onUpdate:modelValue': onUpdate,
    'aria-label': ariaLabel,
    'ui': {
      indicator: 'bg-[#1B1B1F] text-[#F1F4FD]',
      base: 'bg-[#D3D3DE] rounded-none'
    }
  })
