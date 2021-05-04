console.log('Connected...')
document.getElementById('d1').style.display='none'
document.getElementById('d2').style.display='none'
document.getElementById('d3').style.display='none'
document.getElementById('d4').style.display='none'
document.getElementById('popup').style.display=('none')
validation=()=>{
    
    if (document.forms["myForm"]["n"].value==''){
        document.getElementById('n').style.border ='3px solid red';
        document.getElementById('d1').style.display='block';
    }else{
      document.getElementById('n').style.border ='1px solid black';
      document.getElementById('d1').style.display='none';
  }
    // if (document.forms["myForm"]["e"].value=='') {
    //     document.getElementById('e').style.border ='3px solid red';
    //     document.getElementById('d2').style.display='block';
    // }

    

    if (document.forms["myForm"]["p"].value.length<6) {
        document.getElementById('p').style.border ='3px solid red';
        document.getElementById('d3').style.display='block';
    }
    else{
      document.getElementById('p').style.border="1px solid black";
      document.getElementById('d3').style.display='none';
    }
    if (document.forms["myForm"]["mob"].value.length!=10) {
      document.getElementById('m').style.border ='3px solid red';
      document.getElementById('d4').style.display='block';   
    }else{
      document.getElementById('m').style.border="1px solid black";
      document.getElementById('d4').style.display='none'
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.email.value))
  {
    document.getElementById('e').style.border="1px solid black";
  
  document.getElementById('d2').style.display='none'
  }else{
  document.getElementById('d2').style.display='block'
  document.getElementById('e').style.border="3px solid red";

  }
  return false;
  
}
pop=()=>{
  document.getElementById('name').innerHTML=`Name : ${document.getElementById('n').value}`;
  document.getElementById('emailid').innerHTML=`Email : ${document.getElementById('e').value}`;
  document.getElementById('mob').innerHTML=`Mobile : ${document.getElementById('m').value}`;
  if(document.getElementById('n').value!=''&& document.getElementById('e').value!=""&& document.getElementById('m').value!=''){
    document.getElementById('popup').style.display=('block')
  }
  
}