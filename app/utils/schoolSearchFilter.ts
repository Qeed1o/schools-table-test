import type { School } from '~/types'

export const schoolSearchFilter = (search: string) => ({ edu_org: { region, short_name, contact_info } }: School) => {
  if (!search) return true
  const target = search.toLowerCase()

  const regionName = (region.name ?? '').toLowerCase()
  const shortName = (short_name ?? '').toLowerCase()
  const postAddress = (contact_info.post_address ?? '').toLowerCase()

  return regionName.includes(target) || shortName.includes(target) || postAddress.includes(target)
}
