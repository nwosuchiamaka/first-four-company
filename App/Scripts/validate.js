function myFunction() {
            //username
            
            if (document.getElementById('Username').value == "") {
                window.alert('Enter UserName');
                return false;
            }
                //lastname
            else if (document.getElementById('pwd').value == "") {
                window.alert('Enter Password');
                return false;
            }
            else if (document.getElementById('pwd').value == "group4" && document.getElementById('Username').value == "User1") {
                window.location.href = "../App/homepage.html";
               // return false;
            }
                //email
            else  {
                window.alert('Invalid Username or Password');
                return false;
            }
             
        }