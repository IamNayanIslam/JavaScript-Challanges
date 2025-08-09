/* declare a function that will take a string as "" and return the string in reversed spelling*/
function reversedString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reversedString("Hello World"));
