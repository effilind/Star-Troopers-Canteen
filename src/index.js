import './styles.css';
import startPage from "./modules/start"; //objekt
import contactPage from './modules/contact';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';

function loadNav() {
    const content = document.querySelector("#content");
    const nav = document.createElement("nav");
    nav.id = "nav";
    content.appendChild(nav);
    const logo = document.createElement("p");
    logo.classList.add("logo");
    logo.textContent = "Star Trooper's Canteen";
    nav.appendChild(logo);
    const menuList = document.createElement("ul"); //UL Menu
    menuList.classList.add("menulist");
    nav.appendChild(menuList);
    // create menu tags
    const menuTag1 = document.createElement("li");
    menuList.appendChild(menuTag1);
    const link1 = document.createElement("a");
    link1.textContent = "On the Menu";
    link1.href = "#menuCard";
    menuTag1.appendChild(link1);

    const menuTag2 = document.createElement("li");
    menuList.appendChild(menuTag2);
    const link2 = document.createElement("a");
    link2.textContent = "Our Places";
    link2.href = "#menuPlaces";
    menuTag2.appendChild(link2);

    const menuTag3 = document.createElement("li");
    menuList.appendChild(menuTag3);
    const link3 = document.createElement("a");
    link3.textContent = "Contact";
    menuTag3.appendChild(link3);

}


loadNav();
startPage();
contactPage();
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    content.style.display = "none";
});
contents[0].style.display = "block";
const menuLinks = document.querySelectorAll(".menulist > li > a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (link.textContent === "Contact") {
            contents.forEach(content => {
                if (content.id === "contactPage") {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                } 
            
            }); 
        } 
        if (link.textContent === "On the Menu") {
            contents.forEach(content => {
                if (content.id === "startPage") {
                    content.style.display = "block";
                    
                
                } else {
                    content.style.display = "none";
                } 
            
            }); 
        } 
        if (link.textContent === "Our Places") {
            contents.forEach(content => {
                if (content.id === "startPage") {
                    content.style.display = "block";
            
                } else {
                    content.style.display = "none";
                } 
            
            }); 
        } 
    }); 
    
}) 