
export interface UserData {
  _id: number,
  username: string,
  fullname: string,
  salary: number
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
