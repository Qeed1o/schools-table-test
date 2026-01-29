<template>
  <UPopover>
    <app-button
      type="secondary"
      class="w-full"
      trailing-icon="app:calendar"
      size="lg"
      :ui="{
        base: 'flex justify-between'
      }"
    >
      <template v-if="calendar?.start">
        <template v-if="calendar.end">
          {{ df.format(calendar.start.toDate(getLocalTimeZone())) }} - {{ df.format(calendar.end.toDate(getLocalTimeZone())) }}
        </template>

        <template v-else>
          {{ df.format(calendar.start.toDate(getLocalTimeZone())) }}
        </template>
      </template>
      <template v-else>
        Обновлено
      </template>
    </app-button>

    <template #content>
      <div class="bg-background-secondary text-text-primary p-4 rounded-lg min-w-[320px] shadow-lg">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-medium text-text-primary">
            Выбрать период
          </h3>
        </div>
        <UCalendar
          v-model="innerValue"
          range
          class="bg-background-secondary border-gray-200"
          :year-controls="false"
          :ui="{
            heading: 'text-text-primary capitalize',
            cellTrigger: 'text-text-primary calendar-cell',
            headCell: 'text-text-light uppercase calendar-head-cell'
          }"
        />
        <div class="flex gap-2 mt-4">
          <app-button
            type="secondary"
            class="flex-1 flex items-center justify-center"
            label="Отмена"
            @click="cancelSelection"
          />
          <app-button
            type="primary"
            class="flex-1 bg-[#0E0E10] flex items-center justify-center"
            label="Сохранить"
            @click="saveSelection"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script setup lang="ts">
import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date'

const df = new DateFormatter('ru-RU', { dateStyle: 'long' })
const innerValue = shallowRef<{ start: DateValue | undefined, end: DateValue | undefined }>({ start: undefined, end: undefined })
const calendar = defineModel<{ start: DateValue | undefined, end: DateValue | undefined }>()

const emit = defineEmits<{
  cancel: []
  save: []
}>()

const cancelSelection = () => {
  innerValue.value = { start: undefined, end: undefined }
  emit('cancel')
}

const saveSelection = () => {
  calendar.value = innerValue.value
  emit('save')
}
</script>

<style scoped>
:deep(.calendar-cell) {
  border-radius: 0;
}

:deep(.calendar-cell[data-selected=true]) {
  background-color: #C3FCD2;
  color: #0E0E10;
}

:deep(.calendar-cell[data-selection-start=true]) {
  background-color: #24C14E;
}
:deep(.calendar-cell[data-selection-end=true]) {
  background-color: #24C14E;
}

:deep(.calendar-head-cell) {
  color: #93939B;
  font-weight: 400;
}
</style>
