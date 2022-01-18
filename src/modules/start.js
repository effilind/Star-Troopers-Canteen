
export default function startPage() {
    console.log("exportiert!");
    const content = document.querySelector('#content');
    const header = document.createElement("header");
    const containerStartPage = document.createElement("div");
    containerStartPage.classList.add("content");
    containerStartPage.id = "startPage";
    header.classList.add("header");
    containerStartPage.appendChild(header);
    content.appendChild(containerStartPage);
    // Add Children
    //Headernav


    // Titles Header
    const h1 = document.createElement("h1");
    h1.textContent = "All Star Troopers welcome!";
    header.appendChild(h1);
    const h2 = document.createElement("h2");
    h2.textContent = "Come in and get the Imperial Menue";
    header.appendChild(h2);
    const button = document.createElement("button");
    button.id = "goMenu";
    button.classList.add("button");
    button.textContent = "Today's Special";
    header.appendChild(button);

    // Tags for section places
    const places = document.createElement("div");
    places.classList.add("place");
    containerStartPage.appendChild(places);
    const placesBox = document.createElement("div");
    placesBox.classList.add("placeCircles");
    placesBox.id = "menuPlaces";
    places.appendChild(placesBox);

        // circles
        const circle1 = document.createElement("div");
        circle1.classList.add("circle1");
        placesBox .appendChild(circle1);
            const circleText1 = document.createElement("p");
            circleText1.classList.add("overlay");
            circleText1.textContent = "Endor";
            circle1.appendChild(circleText1);
            //circle2
            const circle2 = document.createElement("div");
            circle2.classList.add("circle2");
            placesBox .appendChild(circle2);
                const circleText2 = document.createElement("p");
                circleText2.classList.add("overlay");
                circleText2.textContent ="Death Star";
                circle2.appendChild(circleText2);
            //circle3
            const circle3 = document.createElement("div");
            circle3.classList.add("circle3");
            placesBox .appendChild(circle3);
                const circleText3 = document.createElement("p");
                circleText3.classList.add("overlay");
                circleText3.textContent = "Coruscant";
                circle3.appendChild(circleText3);
        // tags for description
        const placeDesc = document.createElement("div");
        placeDesc.classList.add("placeDescription");
        places.appendChild(placeDesc);
        const h3 = document.createElement("h3");
        h3.textContent = "Take a break from chasing rebels in one of our space canteens.";
        placeDesc.appendChild(h3);
        const listPlaces = document.createElement("ul");
        listPlaces.classList.add("listPlaces");
        placeDesc.appendChild(listPlaces);
            const place1 = document.createElement("li");
            place1.textContent = "Endor";
            place1.classList.add("placePoint");
            listPlaces.appendChild(place1);
            const place2 = document.createElement("li");
            place2.textContent = "Death Start";
            place2.classList.add("placePoint");
            listPlaces.appendChild(place2);
            const place3 = document.createElement("li");
            place3.textContent = "Coruscant";
            place3.classList.add("placePoint");
            listPlaces.appendChild(place3);

    // append first tag of menu
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.id = "menuCard";
    containerStartPage.appendChild(menu);
        // menu content
        const menuTitle = document.createElement("h2");
        menuTitle.textContent = "Chose your Tea Party Menu";
        menuTitle.classList.add("h2");
        menu.appendChild(menuTitle);
        const spalte1 = document.createElement("div");
        spalte1.classList.add("spalte1");
        menu.appendChild(spalte1);
        // Circles Menu
        const menu1 = document.createElement("div");
        menu1.classList.add("menuCircle");
        spalte1.appendChild(menu1);
        const img1 = document.createElement("img");
        img1.src = "img/star-tee.jpg";
        menu1.appendChild(img1);
        // Circle 2
        const menu2 = document.createElement("div");
        menu2.classList.add("menuCircle");
        spalte1.appendChild(menu2);
        const img2 = document.createElement("img");
        img2.src = "img/star-cookie.jpg";
        menu2.appendChild(img2);
        // Circles Spalte 2
        const spalte2 = document.createElement("div");
        spalte2.classList.add("spalte2");
        menu.appendChild(spalte2);
        // Circles 3 + 4
        const menu3 = document.createElement("div");
        menu3.classList.add("menuCircle");
        spalte2.appendChild(menu3);
        const img3 = document.createElement("img");
        img3.src = "img/star-cake.jpg";
        menu3.appendChild(img3);
        const menu4 = document.createElement("div");
        menu4.classList.add("menuCircle");
        spalte2.appendChild(menu4);
        const img4 = document.createElement("img");
        img4.src = "img/star-coffee.jpg";
        menu4.appendChild(img4);
    // append first tags for footer
    const footer = document.createElement("footer");
    footer.classList.add("socialMenu");
    containerStartPage.appendChild(footer);
    const icon1 = document.createElement("i");
    icon1.classList.add("fab");
    icon1.classList.add("fa-jedi-order");
    icon1.classList.add("icons");
    footer.appendChild(icon1);
    const icon2 = document.createElement("i");
    icon2.classList.add("fab");
    icon2.classList.add("fa-galactic-senate");
    icon2.classList.add("icons");
    footer.appendChild(icon2);
    const icon3 = document.createElement("i");
    icon3.classList.add("fab");
    icon3.classList.add("fa-galactic-republic");
    icon3.classList.add("icons");
    footer.appendChild(icon3);

}

