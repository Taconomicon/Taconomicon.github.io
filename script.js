function party() {
  alert("It's a party!");
}

var intro = "My name is Dylan Mink. I'm learning CS at the University of Maryland, and I love to code!";

function writeOut(txt, id, pos) {
  if (pos < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(pos);
    setTimeout(writeOut(txt, id, pos + 1), 500);
  }
}

writeOut(intro, "hi", 0);
