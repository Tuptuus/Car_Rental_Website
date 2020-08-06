const nav = document.querySelector(".ofertDrop");
const main = document.querySelector("#oferta");
const sport = document.querySelector("#sport");
const excl = document.querySelector("#exclusive");
const off = document.querySelector("#offroad");
const elec = document.querySelector("#electric");

const handleClick = function() 
{
  nav.classList.toggle("activeA");
};

main.addEventListener("click", handleClick);
sport.addEventListener("click", handleClick);
excl.addEventListener("click", handleClick);
off.addEventListener("click", handleClick);
elec.addEventListener("click", handleClick);
