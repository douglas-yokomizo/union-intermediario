export interface User {
  login: {
    uuid: string
  },
  name: {
    title: string,
    first: string,
    last: string
  },
  dob: {
    date: string
    age: number
  }
}
