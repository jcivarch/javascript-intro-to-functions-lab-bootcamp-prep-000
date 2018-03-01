function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

logShout('hello')

function logWhisper(string) {
  console.log(string.toLowerCase())
}

logWhisper('HELLO')

function sayHiToGrandma(string) {
  var lowercase = string.toLowerCase();
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  }
}

