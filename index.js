//validate username
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}
function validateForm2(){
      let y= document.forms["myForm"]["fpass"].value;
    if (y == "") {
      alert("password must be filled out");
      return false;
    }
}
  