var intro = "My name is Dylan Mink. I studied CS at the University of Maryland, and I love to code!";
// var intwo = "Feel free to explore, I've tried to make this page fun to use.";
var intwo = "Stay tuned for more, this website is currently under development.";

var punctuation = ['.', ',', '!', "?", ";"];

var party_time = true;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function writeOut(txt, eid, pos) {
  character = txt.charAt(pos);
  delay = 20 + getRandomInt(20);

  if (character == ' ')
    delay = 10;
  else if (punctuation.indexOf(character) >= 0)
    delay += 100

  if (pos < txt.length) {
    document.getElementById(eid).innerHTML += character;
    setTimeout(function () {
      writeOut(txt, eid, pos + 1)
    }, delay);
  }
}

function party() {
  if (party_time) {
    // Expand space before printing intro
    document.getElementById("hi").classList.toggle("extended");
    // Print intro
    setTimeout(function () {
      writeOut(intro, "hi", 0);
    }, 300);

    // Smoothly add space for second line
    setTimeout(function () {
      document.getElementById("explore").classList.toggle("extended_even_MORE");
    }, 1700);

    // Write second line
    setTimeout(function () {
      writeOut(intwo, "explore", 0);
    }, 3500);

    // Spin up those dots
    setTimeout(function () {
      document.getElementById("dot_1").classList.toggle("fade1")
      document.getElementById("dot_2").classList.toggle("fade2")
      document.getElementById("dot_3").classList.toggle("fade3")
    }, 4000);
  }

  party_time = false;
}

window.onload = function () {
  // writeOut(intro, "hi", 0);
};
