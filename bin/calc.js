function calculateTypingTime(string) {
    let time = 0;
    let lengthd = string.length;
    let characters = 0;
    let charactersPerSecond = 0;
    
    if (string.match(/[a-z]/)) {
        characters += 26;
    }
    if (string.match(/[A-Z]/)) {
        characters += 26;
    }
    if (string.match(/[0-9]/)) {
        characters += 10;
    }
    if (string.match(/[!@#$%^&*()\-_=+{}[\];:'",<.>/?\\]/)) {
        characters += 32;
    }
    if (string.match(/[ ]/)) {
        characters += 1;
    }
  
    all_possible_strings = Math.pow(characters, lengthd);
    charactersPerSecond = 1000000000000000;
    time = all_possible_strings / charactersPerSecond;
    time = Math.floor(time);
    let returnTime = "";
    if (time < 1) {
        returnTime = "less than a second";
    } else if (time < 60) {
        returnTime = time + " second(s)";
    } else if (time < 3600) {
        returnTime = Math.floor(time / 60) + " minute(s)";
    } else if (time < 86400) {
        returnTime = Math.floor(time / 3600) + " hour(s)";
    } else if (time < 604800) {
        returnTime = Math.floor(time / 86400) + " day(s)";
    } else if (time < 2629743) {
        returnTime = Math.floor(time / 604800) + " week(s)";
    } else if (time < 31556926) {
        returnTime = Math.floor(time / 2629743) + " month(s)";
    } else {
        returnTime = Math.floor(time / 31556926) + " year(s)";
    }
    if (returnTime == "Infinity years") {
        returnTime = "all of eternity";
    }
    return returnTime;
}
  

module.exports = calculateTypingTime;