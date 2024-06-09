function EmailQuestion() {
  var mailquestion = prompt("What condition do I have?").toLowerCase()
  if (mailquestion === "autism" || mailquestion === "asd") {
    GetEmail()
  } else if (mailquestion === '') {
    alert("Please answer to gain acess!")
  } else {
    alert("Wrong answer! Try again")
  }
}

function PhoneNumber() {
  var pn = prompt("How old am I currently?").toLowerCase()
  if (pn === "15" || pn === "fifteen") {
    GetTele()
  } else if (pn === '') {
    alert("Please answer to gain acess")
  } else {
    alert("Wrong answer! Try again")
  }
}

function Instagram() {
  var ista = prompt("What is my favourite subject?").toLowerCase()
  if (ista === "it" || ista === "infotech" || ista == "information technology" || ista == "I.T") {
    GetIG()
  }
  else {
    alert("Wrong answer! Try again")
  }
}
function GetTele() {
  var telegramdomain64 = "aHR0cHM6Ly90Lm1l"
  var usernametelegram64 = "L0JhcnJN"

  var decriptortelegram = atob(telegramdomain64 + usernametelegram64)

  window.location = (decriptortelegram);
}

function GetIG() {
  var igdomainb64 = "aHR0cHM6Ly93d3cuaW5zdGFncmFt"
  var username64 = "LmNvbS9nZ2JyYW55Lw=="
  var decriptorig = atob(igdomainb64 + username64)
  window.location = (decriptorig)
}

function GetEmail() {
  var namebase64 = "YnJhbmRvbjY2cmIx"
  var domainbase64 = "QGdtYWlsLmNvbQ=="
  var decriptor = atob(namebase64 + domainbase64)
  alert(decriptor)
}


// cursor
const cursorcustom = document.querySelector('[data-custom-cursor]')
const dot = document.querySelector('[data-custom-cursor-dot]')

document.addEventListener('mousemove', function (e) {

  const PosX = e.clientX;
  const PosY = e.clientY;

  cursorcustom.style.left = `${PosX}px`;
  cursorcustom.style.top = `${PosY}px`;

  dot.style.left = `${PosX}px`;
  dot.style.top = `${PosY}px`;

  cursorcustom.animate({
    left: `${PosX}px`,
    top: `${PosY}px`
  }, { duration: 950, fill: "forwards", easing: "ease-out", delay: "15"})
})

document.addEventListener('click', () => {

  cursorcustom.classList.add("cursor-expand");
  setTimeout(() => {
    cursorcustom.classList.remove("cursor-expand");
  }, 500)

  dot.classList.add("custom-cursor-dot-expand");
  setTimeout(() => {
    dot.classList.remove("custom-cursor-dot-expand")
  }, 500)

})

let alllinks = document.querySelectorAll("a", 'a.link');

for (let link = 0; link < alllinks.length; link++) {
  alllinks[link].addEventListener("mouseenter", function () {
    cursorcustom.classList.add("expand-hover-link");
  })
}

for (let link = 0; link < alllinks.length; link++) {
  alllinks[link].addEventListener("mouseleave", function () {
    cursorcustom.classList.remove("expand-hover-link");
  })
}

