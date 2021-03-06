$(document).ready(function(e) {
  $('#btnSend').click(function() {
    var sEmail = $('#email').val();
    var retVal = true;
    // Checking Empty Fields
    if ($.trim(sEmail).length == 0 || $("#name").val()=="") {

      //  e.preventDefault();
      if($("#name").val()==""){
        alert('All fields are mandatory. Please enter your name.');
        $("#name").focus();
        return false;
      }
      if($('#email').val()==""){
        alert('All fields are mandatory. Please enter your email.');
        $("#email").focus();
        return false;
      }
    }
    else {
      if (validateEmail(sEmail)) {

        if($("#message").val()==""){
          alert('Your Message is Empty!');
          $("#message").focus();
          // e.preventDefault();
          return false;
        }
        else{
          alert('Nice!! your Email is valid, and your message will be sent.');
        }
      }
      else {
        alert('Invalid Email Address');
        $("#email").focus();
        // e.preventDefault();
        return false;

      }
    }
  });
});
// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)) {
    return true;
  }
  else {
    return false;
  }
}
