var user_info = [
  {email:"kuzeysinay@gmail.com", password:"1234"},
  {email:"ali@gmail.com", password:"qwerty"},
  {email:"veli@gmail.com", password:"abcd"}
  
]
  
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit-btn");
const loginErrorMsg = document.getElementById("login-error-msg");


document.getElementById("pswrd")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit-btn").click();
    }
});



loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.email.value;
    const password = loginForm.password.value;

    for (i = 0; i < user_info.length; i++) {
      if (username === user_info[i].email && password === user_info[i].password) {
        document.getElementById('submit-btn').style.backgroundColor = 'green';
        document.getElementById('submit-btn').style.borderColor = '#87FFA6';
        document.getElementById('right-arrow').className = 'glyphicon glyphicon-ok';
        
        setTimeout(function directing(){
          window.location.href = 'main-page.html';  
        }, 1000);
        break;
      } 
      else {
      loginErrorMsg.style.opacity = 1;
      document.getElementById('email').style.borderWidth = '4px';
      document.getElementById('pswrd').style.borderWidth = '4px';
      document.getElementById('email').style.borderColor = 'red';
      document.getElementById('pswrd').style.borderColor = 'red';
      }
    }
}
)