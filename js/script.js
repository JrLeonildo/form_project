const btn_visibility = document.querySelector(".visibility");
const password_input = document.querySelector(".input_password");
const password_icon = document.querySelector(".eye")

function passwordVisibility() {
  event.preventDefault()
  let typeIsPassword = password_input.type == "password";

  if(typeIsPassword) {
    password_input.setAttribute("type", "text")
    password_icon.innerText = "visibility_off"
  }else{
    password_input.setAttribute("type", "password")
    password_icon.innerText = "visibility"
  }
}

btn_visibility.addEventListener("click", passwordVisibility);