// function togglePopup() {
    document.getElementById("popup-1")
    .classList.toggle("active");
   // }

   function signUp(e) {
       e.preventDefault();
       let users_fname = document.getElementById("users_fname");
       let fname = users_fname.value;
       let users_lname = document.getElementById("users_lname");
       let lname = users_lname.value;
       let users_email = document.getElementById("users_email");
       let email = users_email.value;
       let users_password = document.getElementById("users_password");
       let password = users_password.value;
       let users_num = document.getElementById("users_num");
       let number = users_num.value;

       if(localStorage.getItem('users') === null) {
           localStorage.setItem('users', JSON.stringify([]));
       }

       let user = {
           fname,
           lname,
           email,
           password,
           number
       }

       let arr = JSON.parse(localStorage.getItem("users"));
       let found = 1;
       arr.forEach(function(el){
           if(el.email === user.email){
               found = 0;
           }
       })
       if(found){
           arr.push(user);
           localStorage.setItem('fname', JSON.stringify(user.fname));
       }
       localStorage.setItem("users", JSON.stringify(arr));

       window.location.href = 'html/signin.html';
       
   }