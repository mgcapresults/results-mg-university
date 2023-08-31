function number(e)
{	
	var key;
	var keychar;
	if (window.event){
		key = window.event.keyCode;		
	}else if (e){
		key = e.which;	
		//alert(key);	
	}
	else
		return true;
	if((key == 8) || (key == 0))
		return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	if((key > 47) && (key < 58)){			
		return true;
	}else
	    return false;	
}
function validateEmail(email)
    {
		var emailpat=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/; 
        var matchArray=email.match(emailpat);
        if(matchArray==null)
         {
            return false;
         }
        return true;
    }
function validatePhone() {

    var a = document.getElementById("cont_no").value;
	
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
		
       return true;
   }
   else {
		alert("Please Enter A valid Phone Number");
		document.getElementById("cont_no").value="";
       return false;
   }
}