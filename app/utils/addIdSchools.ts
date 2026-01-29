import type { School } from '~/types'

export const addIdSchools = (school: School) => {
  return {
    ...school,
    id: school.uuid
  }
}
