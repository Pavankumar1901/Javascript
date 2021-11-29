function validate()
{   
 user()
 father()

}
function user()
{
    var name=document.getElementById("mname").value;
    var fathername=document.getElementById("fname").value;
   var email=document.getElementById("Email").value;
    var dob=document.getElementById("DOB").value;
   var mobilenumber=document.getElementById("Mobilenumber").value;
  var adress=document.getElementById("Adress").value;




    if(name.trim()=="")
    {
            document.getElementById("invalid").innerHTML="invalid should not be blank";
            document.getElementById("invalid").style.visibility="visible";
            document.getElementById("invalid").style.color="red";
        return false;
    }
    else if(name.trim().length<5)
    {
        document.getElementById("invalid").innerHTML="invalid should have more than 5 characters";
        document.getElementById("invalid").style.visibility="visible";
        document.getElementById("invalid").style.color="red";
      
       return false;
    }
    
    else{
        document.getElementById("invalid").innerHTML="valid";
        document.getElementById("invalid").style.visibility="visible";
        document.getElementById("invalid").style.color="green";
        return true;
    }

}
function father(){

    var name=document.getElementById("mname").value;
    var fathername=document.getElementById("fname").value;
   var email=document.getElementById("Email").value;
    var dob=document.getElementById("DOB").value;
   var mobilenumber=document.getElementById("Mobilenumber").value;
  var adress=document.getElementById("Adress").value;

    if(fathername.trim()=="")
    {
            document.getElementById("invalid").innerHTML="invalid should not be blank";
            document.getElementById("invalid").style.visibility="visible";
            document.getElementById("invalid").style.color="red";
        return false;
    }
    else if(fathername.trim().length<5)
    {
        document.getElementById("invalid").innerHTML="invalid should have more than 5 characters";
        document.getElementById("invalid").style.visibility="visible";
        document.getElementById("invalid").style.color="red";
      
       return false;
    }
    
    else{
        document.getElementById("invalid").innerHTML="valid";
        document.getElementById("invalid").style.visibility="visible";
        document.getElementById("invalid").style.color="green";
        return true;
    }

}
    
 

 
   
     
   
       

        
        


   
    


// else if(fathername.trim().length<5)
// {
//     document.getElementById("invalid").innerHTML="invalid should have more than 5 characters";
//         document.getElementById("invalid").style.visibility="visible";
//         document.getElementById("invalid").style.color="red";
//    return false;
// }


// else if(email.trim().length<5){
//     document.getElementById("invalid").innerHTML="invalid";
//     document.getElementById("invalid").style.visibility="visible";
//     document.getElementById("invalid").style.color="red";
//    return false;
// }


   

// function fn2()
// {
//     var email=document.getElementById("Email").value;
//     var regx=/^([a-zA-z0-9\.-]+)@([a-zA-Z0-9-]).([a-z]{2,8})(.[a-z]{2,8})?$/;         
//     if (regx(test(email)))
//      {
//             document.getElementById("invalid").innerHTML="valid";
//             document.getElementById("invalid").style.visibility="visible";
//             document.getElementById("invalid").style.color="green";
//      }
//      else{
//         document.getElementById("invalid").innerHTML="invalid";
//         document.getElementById("invalid").style.visibility="visible";
//         document.getElementById("invalid").style.color="red";
//      }
// }






