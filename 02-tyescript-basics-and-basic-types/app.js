var userInput; // more restrictive type of any
var userName;
userInput = 5;
userInput = 'Craig';
if (typeof userInput === 'string')
    userName = userInput;
function generateError(message, code) {
    // eslint-disable-next-line no-throw-literal
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
