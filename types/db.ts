export type User = {
  id: number
  name: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export type Chat = {
  id: number
  name: string
  body: string
  time: string
}

export type Message = {
  id: number
  senderId: number
  body: string
  timestamp: Date
}
