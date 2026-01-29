<template>
  <div class="w-full h-full flex flex-col gap-6">
    <div class="flex flex-col md:justify-between md:flex-row items-center mb-4 md:mb-0 gap-3">
      <h1 class="text-2xl font-bold text-[#111827]">
        Таблица учреждений
      </h1>
      <div class="w-full md:w-auto flex flex-col md:flex-row items-center gap-3">
        <app-input
          v-model="search"
          class="w-full md:w-auto"
          trailing-icon="app:search"
          placeholder="Поиск"
          size="lg"
          :ui="{
            base: 'hover:bg-[#F1F4FD]'
          }"
        />
        <app-button
          class="w-full md:w-auto"
          label="Скачать"
          icon="app:download"
          type="accent"
          size="lg"
          :ui="{
            label: 'text-[#0E0E10]',
            base: 'justify-center md:justify-start'
          }"
          :loading="isDownloadLoading"
          @click="download()"
        />
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-3">
      <app-popover-calendar v-model="calendar" />
      <app-select
        v-model="region"
        class="w-full"
        clear
        :items="regions"
        :loading="isRegionsLoading"
        size="lg"
        label-key="name"
        placeholder="Все виды"
      />
      <app-select
        v-model="federalDistrict"
        class="w-full"
        clear
        :items="federalDistricts"
        :loading="isFederalDistrictsLoading"
        size="lg"
        label-key="name"
        placeholder="Все статусы"
      />
    </div>
    <div class="content">
      <app-table
        ref="table"
        :columns="columns"
        :data="data"
        :loading="isSchoolsLoading"
        :ui="{
          thead: 'bg-[#F0F0F7]',
          root: 'mb-0',
          td: 'max-w-md whitespace-break-spaces'
        }"
      />
      <app-table-pagination
        v-model:pagination="pagination"
        with-page-size
        :loading="isSchoolsLoading"
        :page-size-options="[5, 10, 20, 30, 40, 50]"
        :data="data"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: regions, isLoading: isRegionsLoading, region } = useRegions()
const { data: federalDistricts, isLoading: isFederalDistrictsLoading, federalDistrict } = useFederalDistricts()
const { data, isLoading: isSchoolsLoading, pagination, columns, search, calendar } = useSchools(region, federalDistrict)
const { download, isLoading: isDownloadLoading } = useSchoolsDownload(region, pagination, calendar)

const table = useTemplateRef('table')
watch(pagination.value, () => {
  search.value = ''
  table.value?.toggleAllPageRowsSelected(false)
})
</script>
