
export interface UserData {
  _id: number,
  username: string,
  fullname: string,
  salary: number,
  role: number
}

export interface UserDocument {
  id: any,
  doc: UserData
}

export interface ResultSet {
  total_rows: number,
  offset: number,
  rows: Array<UserDocument>
}

export interface BarData {
  label: string,
  data: number[]
}

export interface RoleData {
  code: number,
  label: string
}
