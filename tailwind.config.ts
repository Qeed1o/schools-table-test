import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './utils/**/*.{ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './node_modules/@nuxt/ui/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Основные цвета проекта
        primary: {
          50: '#F1F4FD',
          100: '#E3E8FB',
          200: '#C7D1F7',
          300: '#9BAEF1',
          400: '#6B8CE9',
          500: '#4B6DDF',
          600: '#3B5BC7',
          700: '#2F49A6',
          800: '#283D89',
          900: '#243675',
          950: '#1A2452'
        },
        // Текстовые цвета
        text: {
          primary: '#0E0E10',
          secondary: '#55555C',
          muted: '#687588',
          light: '#93939B'
        },
        // Фоновые цвета
        background: {
          primary: '#FFFFFF',
          secondary: '#F1F4FD',
          muted: '#F0F0F7',
          dark: '#0E0E10'
        },
        // Границы
        border: {
          default: '#D3D3DE',
          light: '#E5E5EA'
        },
        // Статусные цвета
        success: {
          DEFAULT: '#24C14E',
          dark: '#16B240'
        },
        // Серая шкала
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      fontFamily: {
        sans: ['Public Sans', 'system-ui', 'sans-serif']
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.06)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.08)',
        strong: '0 8px 32px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  plugins: [],
  // Важно для интеграции с Nuxt UI
  prefix: '',
  corePlugins: {
    preflight: false
  }
}
