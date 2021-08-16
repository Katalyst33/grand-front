let myObject = {
  ircEvent: "PRIVMSG",
  method: "newURI",
  regex: "^http://.*",
};

const { regex, method, ...newObj } = myObject;

console.log(newObj); // has no 'regex' key
console.log(myObject); // remains unchanged
