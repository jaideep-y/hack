function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var icon=document.getElementById("icon");
icon.onclick=function(){
  document.body.classList.toggle("dark");
}