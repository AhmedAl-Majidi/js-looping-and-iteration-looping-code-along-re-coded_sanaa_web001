function writeCards(names, eventName) {
  
  for (var i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${eventName}!`);
  }
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");
