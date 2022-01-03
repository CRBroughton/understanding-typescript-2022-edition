let userInput: unknown // more restrictive type of any
let userName: string

userInput = 5
userInput = 'Craig'

if (typeof userInput === 'string')
  userName = userInput

function generateError(message: string, code: number): never {
  // eslint-disable-next-line no-throw-literal
  throw { message, errorCode: code }
}

generateError('An error occurred!', 500)
