import { animals } from "/data/animals.js";


const form = document.querySelector("#form");
const cardWrapper = document.querySelector("#cardWrapper");
const city = document.querySelector("#city");
const type = document.querySelector("#type");
const message = document.querySelector("#message");


function createAnimalTypeList(){
    let animalTypeList= new Set();                                               //!new set permet de créer un objet sans duplicata*/
    for (const animal of animals){
        animalTypeList.add(animal.type);
    }
    for (const item of animalTypeList){
           type.innerHTML += `
         <option value="${item}">${item}</option>
    `
    }
}
createAnimalTypeList();

let paremString = window.location.search;                                      //!window.location.search permet de récupérer les string url après le "?"
let searchParams = new URLSearchParams(paremString);                           //! URLsearchparams() permet de transformer le string récupérer en objet
let typeValue = searchParams.get("type");                                      
let cityValue = searchParams.get("city");


function searchAnimals(typeValue,cityValue){
    if (!typeValue && !cityValue){
        loadAnimals(animals);
    } else {
        var selectedAnimals=[];
        for (const animal of animals){
            if ((animal.city.toLowerCase() === cityValue.toLowerCase() || cityValue === "")  
                && (animal.type === typeValue || typeValue === "Tout")){
                selectedAnimals.push(animal);
            };
        };
        loadAnimals(selectedAnimals);
        if (selectedAnimals.length===0){
            message.style.display = "block";
            message.innerHTML="Ville non valide";
        }else{
            message.style.display = "block";
            message.innerHTML=`${selectedAnimals.length} résultats trouvés.`
        };
    };
};
searchAnimals(typeValue,cityValue);

function loadAnimals(animals) {
    cardWrapper.innerHTML = ''
    for (const animal of animals) {

        cardWrapper.innerHTML += `
          <div class="card">
                <div class="pic-wrapper"><img src="${animal.imageUrl}"></div>
                <div class="text-wrapper">
                    <p class="type">${animal.type}</p>
                    <h3>${animal.name}</h3>
                    <p>${animal.breed} | ${animal.age}</p>
                    <p>${animal.city}</p>
                    <p class="description">${animal.description}</p>

                </div>
                <button class="meet">Rencontrer</button>

            </div>
        `

    };
};

form.addEventListener("submit",(event) => {
    event.preventDefault();
    searchAnimals(type.value,city.value);
});

