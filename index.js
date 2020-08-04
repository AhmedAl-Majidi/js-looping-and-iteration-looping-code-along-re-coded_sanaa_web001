function writeCards(names, eventName) {
  
  for (var i = 0; i < names.length; i++) {
    return `Thank you, ${names[i]}, for the wonderful ${eventName}!`;
  }
}
console.log(writeCards(["Lisa", "Kaitlin", "Jan"], "surprise"));
