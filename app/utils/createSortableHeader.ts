import { h } from 'vue'
import { UButton } from '#components'

export const createSortableHeader = (
  label: string,
  column: {
    getIsSorted: () => 'asc' | 'desc' | false
    toggleSorting: (direction: boolean) => void
  }
) => {
  const isSorted = column.getIsSorted()
  return h(UButton, {
    class: 'w-full flex justify-between hover:bg-background-secondary',
    ui: {
      label: 'text-base font-bold transition duration-300 ease-in-out text-text-secondary hover:text-text-primary'
    },
    color: 'neutral',
    variant: 'ghost',
    label,
    trailingIcon: isSorted
      ? isSorted === 'asc'
        ? 'app:sort-asc'
        : 'app:sort-desc'
      : 'app:unsorted',
    onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
  })
}
