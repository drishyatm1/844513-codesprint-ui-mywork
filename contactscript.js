
  function validateForm() {

  var fname = document.forms["form1"]["name"].value;
 
  if (fname == "") {
    alert("Name must be filled out");
    return false;
  }

   if (!/^[a-zA-Z]*$/g.test(document.form1.name.value)) {
        alert("Invalid characters");
        document.form1.name.focus();
        return false;
    }

    var lname = document.forms["form1"]["surname"].value;
  
    if (lname == "") {
    alert("Name must be filled out");
    return false;
  }

   if (!/^[a-zA-Z]*$/g.test(document.form1.surname.value)) {
        alert("Invalid characters");
        document.form1.surname.focus();
        return false;

}
}

