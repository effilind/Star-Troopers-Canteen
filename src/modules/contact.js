

export default function contentPage() {
    console.log("exportiert!");
    const content = document.querySelector('#content');
    const containerContactPage = document.createElement("div");
    containerContactPage.classList.add("content");
    containerContactPage.id = "contactPage";
    const header = document.createElement("header");
    header.classList.add("headerContact");
    containerContactPage.appendChild(header);
    content.appendChild(containerContactPage);
    
    // Titles Header
    const h1 = document.createElement("h1");
    h1.textContent = "Become a Member of the Empire";
    header.appendChild(h1);
    const h2 = document.createElement("h2");
    h2.textContent = "And collect your goodies";
    header.appendChild(h2);
    const button = document.createElement("button");
    button.id = "goMenu";
    button.classList.add("button");
    button.textContent = "What's in it for me?";
    header.appendChild(button);

    // Tags for section places
    const places = document.createElement("div");
    places.classList.add("place");
    containerContactPage.appendChild(places);
    const placesBox = document.createElement("div");
    placesBox.classList.add("placeCircles");
    //placesBox.id = "menuPlaces";
    places.appendChild(placesBox);

        // circles
        const circle1Contact = document.createElement("div");
        circle1Contact.classList.add("circle1Contact");
        placesBox.appendChild(circle1Contact);
            //const contactText = document.createElement("p");
           // contactText.classList.add("overlay");
           // contactText.textContent = "The Collector's Game";
           // circle1.appendChild(circleText1);
        // tags for description
        const placeDesc = document.createElement("div");
        placeDesc.classList.add("placeDescription");
        places.appendChild(placeDesc);
        const h3 = document.createElement("h3");
        h3.textContent = "As a member of the Empire, you receive a free trading card game.";
        placeDesc.appendChild(h3);
        const subText = document.createElement("h2");
        subText.textContent = "Including your favorite heros";
        placeDesc.appendChild(subText);

        const listPlaces = document.createElement("ul");
        listPlaces.classList.add("listPlaces");
        placeDesc.appendChild(listPlaces);
            const place1 = document.createElement("li");
            place1.textContent = "Darth Vader";
            place1.classList.add("placePoint");
            listPlaces.appendChild(place1);
            const place2 = document.createElement("li");
            place2.textContent = "Darth Maul";
            place2.classList.add("placePoint");
            listPlaces.appendChild(place2);
            const place3 = document.createElement("li");
            place3.textContent = "The Imperator";
            place3.classList.add("placePoint");
            listPlaces.appendChild(place3);

    // append tags for footer
    const footer = document.createElement("footer");
    footer.classList.add("socialMenu");
    containerContactPage.appendChild(footer);
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
