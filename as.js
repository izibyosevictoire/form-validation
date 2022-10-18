function validation(){
    var name=document.getElementById("name");
    var email=document.getElementById("emal");
    var enter=document.getElementById("enter");
    var output=document.getElementById("output");
    enter.innerHTML="please enter your name";
    output.innerHTML="please enter your email";
document.getElementById("enter").style.color="red";
document.getElementById("output").style.color="red";
document.getElementsById("name").style.outlineColor="red";
}
