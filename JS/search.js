import { animals } from "/data/animals.js";


const cardWrapper = document.querySelector("#cardWrapper");



function loadAnimals(currentPage, itemPerPage) {
    for (let i=currentPage-1;i<itemPerPage;i++) {
        console.log(animals[i].name);

        cardWrapper.innerHTML += `
          <div class="card">
                <div class="pic-wrapper"><img src="${animals[i].imageUrl}"></div>
                <div class="text-wrapper">
                    <p class="type">${animals[i].type}</p>
                    <h3>${animals[i].name}</h3>
                    <p>${animals[i].breed} | ${animals[i].age}</p>
                    <p>${animals[i].city}</p>
                    <p class="description">${animals[i].description}</p>

                </div>
                <button class="meet">Rencontrer</button>

            </div>
        `

    };
};

loadAnimals(1,8);
