
	var userData = JSON.parse(localStorage.getItem("UserDatabase")) || [];

	var email = document.forms['form']['email'];
	var password = document.forms['form']['password'];
	
	var email_error = document.getElementById('email_error');
	var pass_error = document.getElementById('pass_error');

	email.addEventListener('textInput', email_Verify);
	password.addEventListener('textInput', pass_Verify);

  //  form.addEventListener('submit', function(elem) {
   //     elem.preventDefault();
        
    //    user();
        
    
  //  });
    
    var user = {
        userEmail:email.value,
        userPassword:password.value,
    }
    userData.push(user);
    localStorage.setItem("userDatabase",JSON.stringify(userData))

   
	
	function validated(){
        var emailValue = email.value;
        var passwordValue = password.value;
    
		if (email.value.length < 9) {
			email.style.border = "1px solid red";
			email_error.style.display = "block";
			email.focus();
			return false;
		}
		if (password.value.length < 6) {
			password.style.border = "1px solid red";
			pass_error.style.display = "block";
			password.focus();
			return false;
		}
	
	}
	function email_Verify(){
		if (email.value.length >= 8) {
			email.style.border = "1px solid silver";
			email_error.style.display = "none";
			return true;
			console.log(document.location.href="home page.html");
		}
	}
	function pass_Verify(){
		if (password.value.length >= 5) {
			password.style.border = "1px solid silver";
			pass_error.style.display = "none";
			return true;
            console.log(document.location.href="home page.html");
            }
		}
		function btnClick(){
			document.location.href="home page.html";
		}





   