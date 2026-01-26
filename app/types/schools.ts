export interface CodeNamePair {
  name: string | null
  code: string | null
}

export interface ContactInfo {
  post_address: string
  phone: string
  fax: string
  email: string
  website: string
}

export interface LegalInfo {
  ogrn: string
  inn: string
  kpp: string
}

export interface HeadInfo {
  post: string
  name: string
}

export interface RegionInfo {
  name: string
  code: number
}

export interface FederalDistrictInfo {
  name: string
  short_name: string
  code: string
}

export interface EduOrg {
  uuid: string
  full_name: string
  short_name: string
  head_edu_org_id: string | null
  is_branch: boolean
  contact_info: ContactInfo
  legal_info: LegalInfo
  head: HeadInfo
  form: CodeNamePair
  kind: CodeNamePair
  type: CodeNamePair
  region: RegionInfo
  federal_district: FederalDistrictInfo
}

export interface EducationalProgram {
  uuid: string
  type: CodeNamePair
  kind: CodeNamePair
  edu_level: {
    name: string
    short_name: string | null
    code: string | null
  }
  edu_sub_level: CodeNamePair
  edu_normative_period: number | null
  program: CodeNamePair
  okso_code: string | null
  ugs: CodeNamePair
  qualification: string | null
  is_accredited: boolean
  is_canceled: boolean
  is_suspended: boolean
}

export interface Supplement {
  uuid: string
  number: string
  is_for_branch: boolean
  form_number: string | null
  serial_number: string | null
  note: string | null
  status: CodeNamePair
  edu_org: EduOrg
  educational_programs: EducationalProgram[]
}

export interface School {
  uuid: string
  is_federal: boolean
  reg_number: string
  serial_number: string | null
  form_number: string | null
  issue_date: string
  end_date: string
  regulatory: string
  status: CodeNamePair
  type: CodeNamePair
  created_at: string
  updated_at: string
  edu_org: EduOrg
  supplements: Supplement[]
  decisions: unknown[]
}

export interface SchoolsResponse {
  pages_count: number
  page: number
  total_count: number
  list: School[]
}
