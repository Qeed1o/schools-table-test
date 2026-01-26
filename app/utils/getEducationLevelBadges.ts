import type { EducationalProgram, School, Supplement } from '~/types'

const levelMatchers = [
  {
    label: 'Проф',
    re: /проф/i
  },
  {
    label: 'Высшее',
    re: /высш/i
  },
  {
    label: 'Специальное',
    re: /спец/i
  },
  {
    label: 'Баклавр',
    re: /бакалавр/i
  },
  {
    label: 'Среднее',
    re: /общ/i
  }
]

function collectLevelBadges(value: Supplement[] | Supplement | EducationalProgram, result: Set<string> = new Set()) {
  if (Array.isArray(value)) value.forEach(v => collectLevelBadges(v, result))
  if ('educational_programs' in value) value.educational_programs.forEach(v => collectLevelBadges(v, result))
  if ('edu_level' in value) levelMatchers.forEach(
    ({ re, label }) => re.test(value.edu_level.name) && result.add(label)
  )
  return result
}

export default function getEducationLevelBadges(supplements: School['supplements']) {
  return Array.from(collectLevelBadges(supplements))
}
