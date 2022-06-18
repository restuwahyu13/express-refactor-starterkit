export interface IUsers {
  id: number
  name: string
  email: string
  phone: string
  password: string
  active?: boolean
  photo?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}
