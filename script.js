function validEmail(str) {
  //your JS code here.
	if(str.length == 0){
		return false;
	}
	if(str.indexOf("@")!= -1 && str.indexOf("@")!=0 && str.indexOf(".")!=-1 && str.indexOf("@com")==-1 && str.charAt(str.length-1)!=".")  {
		return true;
	}

	return false;
}

// Do not change the code below.



const str = prompt("Enter an email address.");
alert(validEmail(str));
