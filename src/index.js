import { loadNav } from "./nav";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

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
      clearActiveTab();
      event.target.classList.add('active');
      if(event.target.innerHTML === 'Home'){
        content.appendChild(loadHome);
      }else if(event.target.innerHTML === 'Menu'){
        content.appendChild(loadMenu);
      }else if(event.target.innerHTML === 'Contact'){
        content.appendChild(loadContact);
      }
  }
}

function clearActiveTab(){
    const navItems = pageHeader.querySelector('.main-nav').querySelectorAll('.nav-item');
    for(let i = 0; i < navItems.length; i++){
      navItems[i].classList.remove('active');
    }
    content.innerHTML = '';
}