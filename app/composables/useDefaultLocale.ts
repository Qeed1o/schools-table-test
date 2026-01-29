import type { Locale, Messages } from '@nuxt/ui'

export const useDefaultLocale = (): Locale<Messages> => ({
  code: 'ru-Ru',
  dir: 'ltr',
  name: 'Русский',
  messages: {
    alert: {
      close: ''
    },
    authForm: {
      hidePassword: '',
      showPassword: '',
      submit: ''
    },
    banner: {
      close: ''
    },
    calendar: {
      nextMonth: '',
      nextYear: '',
      prevMonth: '',
      prevYear: ''
    },
    carousel: {
      dots: '',
      goto: '',
      next: '',
      prev: ''
    },
    chatPrompt: {
      placeholder: ''
    },
    chatPromptSubmit: {
      label: ''
    },
    colorMode: {
      dark: '',
      light: '',
      switchToDark: '',
      switchToLight: '',
      system: ''
    },
    commandPalette: {
      back: '',
      close: '',
      noData: '',
      noMatch: '',
      placeholder: ''
    },
    contentSearch: {
      description: undefined,
      links: '',
      theme: '',
      title: undefined
    },
    contentSearchButton: {
      label: ''
    },
    contentToc: {
      title: ''
    },
    dashboardSearch: {
      description: undefined,
      theme: '',
      title: undefined
    },
    dashboardSearchButton: {
      label: ''
    },
    dashboardSidebarCollapse: {
      collapse: '',
      expand: ''
    },
    dashboardSidebarToggle: {
      close: '',
      open: ''
    },
    error: {
      clear: ''
    },
    fileUpload: {
      removeFile: ''
    },
    header: {
      close: '',
      description: undefined,
      open: '',
      title: undefined
    },
    inputMenu: {
      create: '',
      noData: '',
      noMatch: ''
    },
    inputNumber: {
      decrement: '',
      increment: ''
    },
    modal: {
      close: ''
    },
    pricingTable: {
      caption: ''
    },
    prose: {
      codeCollapse: {
        closeText: '',
        name: '',
        openText: ''
      },
      collapsible: {
        closeText: '',
        name: '',
        openText: ''
      },
      pre: {
        copy: ''
      }
    },
    selectMenu: {
      create: '',
      noData: '',
      noMatch: '',
      search: ''
    },
    slideover: {
      close: ''
    },
    table: {
      noData: ''
    },
    toast: {
      close: ''
    }
  }
})
