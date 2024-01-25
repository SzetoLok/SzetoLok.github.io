// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}

// scroll sections
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 100
    let height = sec.offsetHeight
    let id = sec.getAttribute("id")

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active")
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
      })
    }
  })
  // sticky header
  let header = document.querySelector("header")

  header.classList.toggle("sticky", window.scrollY > 100)

  // remove toggle icon and navbar when click navbar links(scroll)
  menuIcon.classList.remove("bx-x")
  navbar.classList.remove("active")
}

//readmore
let readmoreBtn = document.querySelector(".btn.btn-readmore")
let about_text = document.querySelector(".about-text")

readmoreBtn.addEventListener("click", (e) => {
  about_text.classList.toggle("show-more")
  if (readmoreBtn.innerText === "Read More") {
    readmoreBtn.innerText = "Read Less"
  } else {
    readmoreBtn.innerText = "Read More"
  }
})

//send email
function sendMail() {
  var params = {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    emailsubject: document.getElementById("emailsubject").value,
    message: document.getElementById("message").value,
  }

  const serviceID = "service_jzdeild"
  const templateID = "template_s2rez6i"

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("fullname").value = ""
      document.getElementById("email").value = ""
      document.getElementById("number").value = ""
      document.getElementById("emailsubject").value = ""
      document.getElementById("message").value = ""
      console.log(res)
      alert("Your message is sent succesfully")
    })
    .catch((err) => console.log(err))
}
