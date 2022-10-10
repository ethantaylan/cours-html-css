const Body = document.getElementById("body");

//LeftMenu var
const Cross = document.getElementById("cross");
var LeftMenu = document.getElementById("left-menu");
const LeftMenuUl = document.getElementById("left-menu-ul");
const EthanLeftMenu = document.getElementById("EthanLeftMenu");
const JeremyLeftMenu = document.getElementById("JeremyLeftMenu");
const AwaLeftMenu = document.getElementById("AwaLeftMenu");
const EmmanuelLeftMenu = document.getElementById("EmmanuelLeftMenu");
const SofyanelLeftMenu = document.getElementById("SofyaneLeftMenu");
LeftMenu = true;

//Main Menu Var
const AccueilBtn = document.getElementById("AccueilBtn");
const PortfoliosBtn = document.getElementById("PortfoliosBtn");
const FormationsBtn = document.getElementById("FormationsBtn");
const ContactezNousBtn = document.getElementById("ContactezNousBtn");

function crossClick() {
  if (LeftMenu === true) {
    Cross.classList = "fa-solid fa-caret-right cross";
    LeftMenu = false;
    LeftMenuUl.style.width = "20px";
    LeftMenuUl.style.display = "none";
  } else if (LeftMenu === false) {
    Cross.classList = "fa-solid fa-caret-left cross";
    LeftMenu = true;
    LeftMenuUl.style.width = "unset";
    LeftMenuUl.style.display = "flex";
  }
}

function activeAccueil() {
  AccueilBtn.classList.add("active");
  PortfoliosBtn.classList.remove("active");
  FormationsBtn.classList.remove("active");
  ContactezNousBtn.classList.remove("active");
}

function activePortfolios() {
  AccueilBtn.classList.remove("active");
  PortfoliosBtn.classList.add("active");
  FormationsBtn.classList.remove("active");
  ContactezNousBtn.classList.remove("active");
}
function activeFormations() {
  AccueilBtn.classList.remove("active");
  PortfoliosBtn.classList.remove("active");
  FormationsBtn.classList.add("active");
  ContactezNousBtn.classList.remove("active");
}
function activeContactezNous() {
  AccueilBtn.classList.remove("active");
  PortfoliosBtn.classList.remove("active");
  FormationsBtn.classList.remove("active");
  ContactezNousBtn.classList.add("active");
}

function EthanActive() {
  EthanLeftMenu.classList.add("left-menu-active");
  JeremyLeftMenu.classList.remove("left-menu-active");
  AwaLeftMenu.classList.remove("left-menu-active");
  EmmanuelLeftMenu.classList.remove("left-menu-active");
  SofyaneLeftMenu.classList.remove("left-menu-active");
  console.log("clicked");
}

function JeremyActive() {
  EthanLeftMenu.classList.remove("left-menu-active");
  JeremyLeftMenu.classList.add("left-menu-active");
  AwaLeftMenu.classList.remove("left-menu-active");
  EmmanuelLeftMenu.classList.remove("left-menu-active");
  SofyaneLeftMenu.classList.remove("left-menu-active");
}

function AwaActive() {
  EthanLeftMenu.classList.remove("left-menu-active");
  JeremyLeftMenu.classList.remove("left-menu-active");
  AwaLeftMenu.classList.add("left-menu-active");
  EmmanuelLeftMenu.classList.remove("left-menu-active");
  SofyaneLeftMenu.classList.remove("left-menu-active");
}

function EmmanuelActive() {
  EthanLeftMenu.classList.remove("left-menu-active");
  JeremyLeftMenu.classList.remove("left-menu-active");
  AwaLeftMenu.classList.remove("left-menu-active");
  EmmanuelLeftMenu.classList.add("left-menu-active");
  SofyaneLeftMenu.classList.remove("left-menu-active");
}

function SofyaneActive() {
  EthanLeftMenu.classList.remove("left-menu-active");
  JeremyLeftMenu.classList.remove("left-menu-active");
  AwaLeftMenu.classList.remove("left-menu-active");
  EmmanuelLeftMenu.classList.remove("left-menu-active");
  SofyaneLeftMenu.classList.add("left-menu-active");
}
