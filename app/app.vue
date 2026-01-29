<template>
  <UApp :locale="locale">
    <div class="bg-black min-h-[200px]">
      <div class="flex justify-between px-8 py-3 items-center">
        <img src="/logo.png">
        <div class="flex flex-col gap-1 items-end font-bold text-[#55555C] text-sm">
          <img src="/logo-small.png">
          <span>+7 962 253 20 37</span>
          <span>sales@skilline.ru</span>
          <span>skilline.ru</span>
        </div>
      </div>
      <div class="px-8 py-4 pb-8">
        <h1 class="text-4xl font-bold text-white px-4">
          Тестовое задание
        </h1>
      </div>
    </div>

    <UMain class="md:px-10 md:py-5 bg-[#F1F4FD]">
      <div class="rounded-lg bg-white p-5">
        <NuxtPage />
      </div>
    </UMain>
  </UApp>
</template>

<script setup lang="ts">
const locale = useDefaultLocale()
</script>
