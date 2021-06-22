import { loadNav } from "./nav";
import { loadHome } from "./home";

const pageHeader = document.querySelector(".page-header");
const content = document.getElementById("content");

// ? create nav in page header
pageHeader.appendChild(loadNav);

// ? initially show home in content
content.appendChild(loadHome);

// ? add event listener to pageHeader to change tabs
pageHeader.addEventListener("click", changeTab);

function changeTab(event) {
  if (event.target.classList.contains("nav-item")) {
      console.log(event.target);
  }
}

function clearActiveTab(){
    pageHeader.
}