let userInput: unknown // more restrictive type of any
let userName: string

userInput = 5
userInput = 'Craig'

if (typeof userInput === 'string')
  userName = userInput
