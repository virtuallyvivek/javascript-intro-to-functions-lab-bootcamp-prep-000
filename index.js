function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}



function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    console.logWhisper("I can't hear you!"); 
  }
  if (string === string.toUpperCase()) {
    console.logShout("I can't hear you!"); 
  }
  if (string === "I love you, Grandma"){
    console.log("I love you too");
  }
}