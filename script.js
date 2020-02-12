 

        $(function () {
        $("input[name='optradio']").click(function () {
            if ($("#radio4").is(":checked")) {
                $("#txtTrainerName").removeAttr("disabled");
                $("#txtTrainerName").focus();
            } else {
                $("#txtTrainerName").attr("disabled", "disabled");
            }
  
        }); 
    });
$(function () {
        $("input[name='optradio']").click(function () {
            if ($("#radio5").is(":checked")) {
                $("#txtOthers").removeAttr("disabled");
                $("#txtOthers").focus();
            } else {
                $("#txtOthers").attr("disabled", "disabled");
            }
  
        });
    });

        function validateForm(){
           var fname = document.forms["form2"]["name"].value;
 
  if (fname == "") {
    alert("Name must be filled out");
    return false;
  }else if (!/^[a-zA-Z]*$/g.test(fname)) {
        alert("Invalid characters fname");
        document.form2.name.focus();
        return false;
    }
    else if(/^\s+$/.test(fname.value))
    {
      alert("Invalid  fname");
        document.form2.name.focus();
        return false;
    }
    else{
      
      var storedValue=document.getElementById("name");
      
      localStorage.setItem("firstname", storedValue.value);
    }

    


    var lname = document.getElementById("lname");
  
    if (lname.value == "") {
    alert("last Name must be filled out");
    return false;
  }else if(!/^[a-zA-Z]*$/g.test(lname.value)) {
  
        alert("Invalid characters lname");
        document.form2.surname.focus();
        return false;

}

  var ageValid=document.getElementById("age");

  if (ageValid.value == "") {
    alert("age should be filled out");
  }
  else if(ageValid<18 || ageValid>60){
      alert("Ineligible");
     // document.form2.age.focus();
      return false;
  }



}


     
