function EmailQuestion() {
  var mailquestion = prompt("What condition do I have?")
  mailquestion = mailquestion.toLowerCase()
  if (mailquestion === "autism" || mailquestion === "asd") {
    GetEmail()
  } else if (mailquestion === '') {
    alert("Please answer to gain acess!")
  } else {
    alert("Wrong answer! Try again")
  }
}

function PhoneNumber() {
  var pn = prompt("How old am I currently? ")
  pn = pn.toLowerCase()
  if (pn === "15" || pn === "fifteen") {
    window.location = 'https://t.me/BarrM'
  } else if (pn === '') {
    alert("Please answer to gain acess")
  } else {
    alert("Wrong answer! Try again")
  }
}

function Instagram() {
  var ista = prompt("What is my favourite subject?")
  ista = ista.toLowerCase()
  if (ista === "it" || ista === "infotech" || ista == "informationtechnology" || ista == "I.T") {
    window.location = 'https://www.instagram.com/iiiibran/?hl=en'
  }
  else {
    alert("Wrong answer! Try again")
  }
}

function GetEmail() {
  // const name = "brandon66rb1"
  //const domain = "@gmail.com"

  //  var en = btoa(name)
  //var en2 = btoa(domain)

  var namebase64 = "YnJhbmRvbjY2cmIx"
  var domainbase64 = "QGdtYWlsLmNvbQ=="

  var decriptor = atob(namebase64 + domainbase64)
  alert(decriptor)

  // console.log(decriptor)
  // console.log(en + "2nd encriotor start" + en2 )
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
  }, { duration: 800, fill: "forwards" })
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
