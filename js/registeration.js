$("document").ready(() => {






  // /show registeration form
  $(".reg").click((a) => {

    $('.login').hide();
    $('.reg').show();
    $('.searchbar').hide();
    // a.preventDefault();
  });


  //confirm password
  $("#cPassword").keyup(() => {
    var passw = $("#password").val();
    console.log(passw);
    console.log($("#cPassword").val());
    var cpv = $("#cPassword").val();
    if (passw != cpv) {
      $("#cp").html("Password Not Matching").css("color", "red");

      $('#sub').prop('disabled', true);


    }
    else {

      $("#cp").html("Password Matching").css("color", "green");

      $('#sub').removeAttr("disabled");
    }

  });

  // console.log($.getJSON("http://localhost:3000/profile"));


  //check if mail is present
  $("#mymail").keyup(() => {
    console.log("gdjkasgdjk");

    var mail = $("#mymail").val();
    console.log(mail);
    // console.log(data);
    $.getJSON("http://localhost:3000/profile", (data) => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].email == mail) {
          console.log("fhsdfgkuhsdgfkusdg");
          $("#mailCheck").html("This mail Id Already Exists");

          $('#sub').prop('disabled', true);

          //$('#sub').removeAttr('disabled');

        }

        else {
          
          var mail = $("#mymail").val();  

          $('#sub').removeAttr('disabled');

        }
      }
    })



  });


 //Not Registered? Create Account
 $("#singUp").click((a) => {
  //$('.log').hide();
  console.log("hr");
  debugger;
   $('.login').hide();
   $('.abc').show();
  $('#registerationForm').show();
  $('.reg').show();

  // a.preventDefault();
});


//logout 
$("#mylogOutButton").click(()=>{
  sessionStorage.removeItem("user");
  $("#mylogOutButton").hide();
  
    $('#mysingUpButton').show();         
   $('#mylogButton').show();  

});

  //registeration form
  $("#registerationForm").submit((a) => {
    a.preventDefault();  //to prevent auto submission of form
    var name = $("#name").val();
    var mail = $("#mymail").val();
    console.log("hi"+mail);
    var pass = $("#password").val();
    var gend = $('input[name="gender"]:checked').val();
    console.log("hi"+name + " " + mail);


    $.ajax({
      url: "http://localhost:3000/profile",
      method: "POST",
      data: {
        
        "name": name,
        "email": mail,
        "password": pass,
        "gender": gend

      },
      success: (x) => {
        alert(x.mail +" posted");
        console.log(x);
      }

    })
  });

  //show login form
  $(".log").click((a) => {
    $('.reg').hide();
    $('.log').hide();
    $('.login').show();
    $(".searchbar").hide();

    // a.preventDefault();
  });

   


  //login Form
  $("#loginForm").submit((a) => {
    a.preventDefault();  //to prevent auto submission of form
    var mail = $("#loginMail").val();
    var pass = $("#loginPassword").val();
    console.log(mail + " " + pass);

    $.getJSON("http://localhost:3000/profile", (data) => {
      for (var i = 0; i < data.length; i++) {


        if (data[i].email == mail && data[i].password == pass) {

          sessionStorage.setItem("user", JSON.stringify(data[i]));

 
             
          $('.login').hide();   
          $("#mylogOutButton").show();
          
          var a = JSON.parse(sessionStorage.getItem("user"));
          console.log("hello" + a.name);

         


          break;

        }

        if (data[i].email != mail && data[i].password != pass) {
          $("#validLogin").html("please check your email and password").css('color', 'red');
        }
      }


    })



  });


  if(sessionStorage.getItem("user")!=null)
  {
    // $("mylogButton").hide();

  }

})