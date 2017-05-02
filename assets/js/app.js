//NavBar changes on scrolling
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("menu");
  var botonSign = document.getElementById("btn-signup");
  var logo = document.getElementById("logo");
  var opciones = document.getElementsByClassName("menu-option");
  var scroll = window.pageYOffset || document.body.scrollTop;
    if(scroll>50){
      navbar.setAttribute("class","menu-scroll");
      logo.setAttribute("src","assets/img/logo-pink.png");
      botonSign.style.opacity = "1";
      botonSign.style.color = "#FF00BF";
      for(var i=0; i<opciones.length-1; i++){
        opciones[i].style.color = "gray";
      }
    } else {
      navbar.removeAttribute("class","menu-scroll");
      logo.setAttribute("src","assets/img/logo-white.png");
      botonSign.style.opacity = "0";
      for(var i=0; i<opciones.length-1; i++){
        opciones[i].style.color = "white";
      }
    }
},false);

//Inputs functions
var phone = document.getElementById("phone");
var name = document.getElementById("name");
var email = document.getElementById("email");
var city = document.getElementById("city");

//displays complete form on click on phone input
phone.addEventListener("click",function(){
    document.getElementById("on-signup").style.display = "block";
});

phone.onblur = function(){
  if(phone.value==""){
    phone.nextElementSibling.style.display = "block";
  }
  else if(phone.value.length < 7 || phone.value.length > 9){
    phone.nextElementSibling.style.display = "block";
  }
  else {phone.nextElementSibling.style.display = "none";}
}

name.onblur = function(){
  var regex = "([A-Z]{1}[a-zñá-ú]*([\s]?))+";
  if(name.value.length==0){
    name.nextElementSibling.style.display = "block";
  }
  if(regex.text(name.value)){
    name.nextElementSibling.style.display = "block";
  }
  else {name.nextElementSibling.style.display = "none";}
}

email.onblur = function(){
  if(email.value==""){
    email.nextElementSibling.style.display = "block";
  }
}

city.onblur = function(){
  var regex2 = "([A-Z]{1}[a-zñá-ú][´|-]?*([\s]?))+";
  if(city.value==""){
    city.nextElementSibling.style.display = "block";
  }
  if(!regex2.test(city.value)){
    city.nextElementSibling.style.display = "block";
  }
  else {city.nextElementSibling.style.display = "none";}
}
