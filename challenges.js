//////////////////// Challenge 2 

function alertTheButtonNumber() {
  let buttons = document.querySelectorAll(".border-gradient-to-primary.text-dark")

  for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function jsFunc() {
          alert("Clicked button " + i + 1);
      }
  }
}

///////////////////////// Challenge 3


function alertCookies() {
  let buttons = document.querySelectorAll(".level0.css-1iu1lyr.e1wjqk2t1")

  for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function jsFunc() {

          if (getCookie("browserClick") !== "browserClick") {
              setCookie("browserClick", "browserClick", 999)
          } else {
              alert(buttons[i].innerHTML)
          }
      }
  }
}