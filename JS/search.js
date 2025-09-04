import { animals } from "/data/animals.js";


const cardWrapper = document.querySelector("#cardWrapper");



function loadAnimals(currentPage, itemPerPage) {
    for (let i=currentPage-1;i<itemPerPage;i++) {
        console.log(animals[i].name);

        cardWrapper.innerHTML += `
          <div class="card">
                <img src="${animals[i].imageUrl}">
                <p>${animals[i].type}</p>
                <h3>${animals[i].name}</h3>
                <p>${animals[i].breed} | ${animals[i].age}</p>
                <p>${animals[i].city}</p>
                <p>${animals[i].description}</p>
                <button class="meet">Rencontrer</button>
            </div>
        `

    };
};

loadAnimals(1,4);
