import type { DateValue } from '@internationalized/date'

export const dateValueToYmd = (value: DateValue | undefined) =>
  value ? `${value.year}-${value.month < 10 ? '0' + value.month : value.month}-${value.day}` : undefined
