var punctuation = ['.', ',', '!', "?", ";", "\""];
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

/* Sourced from https://stackoverflow.com/a/21561584 with modifications */

function writeOnScroll(txt, elementId) {
  var elt = document.getElementById(elementId);

  $(window).scroll(function(written_flag_id) {
     var hT = $("#" + elementId).offset().top,
         hH = $("#" + elementId).outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
      $(window).off('scroll');
      writeOut(txt, elementId, 0)
    }
  });
}

// END

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
    }, 2800);

    // Write second line
    setTimeout(function () {
      writeOut(intwo, "explore", 0);
    }, 3500);

    // Spin up those dots
    setTimeout(function () {
      document.getElementById("dot_1").classList.toggle("fade1")
      document.getElementById("dot_2").classList.toggle("fade2")
      document.getElementById("arrow").classList.toggle("fade3")
    }, 7500);
  }

  party_time = false;
}
