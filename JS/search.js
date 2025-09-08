import { animals } from "/data/animals.js";


const form = document.querySelector("#form");
const cardWrapper = document.querySelector("#cardWrapper");
const city = document.querySelector("#city");
const type = document.querySelector("#type");
const test = document.querySelector("#test");



form.addEventListener("submit",(event) => {
    event.preventDefault();

    var selectedAnimals= []
    for (const animal of animals){
 
        if ((animal.city.toLowerCase() === city.value.toLowerCase() || city.value === '')  
            && (animal.type === type.value || type.value === 'Tout')){
                selectedAnimals.push(animal)
            }else{
                test.innerHTML="erreur"
            }
    
    }
    loadAnimals(selectedAnimals)

})

function createAnimalList(){
    let animalList= new Set();                                               //!new set permet de créer un objet sans duplicata*/
    for (const animal of animals){
        animalList.add(animal.type)
    }
    for (const item of animalList){
           type.innerHTML += `
         <option value="${item}">${item}</option>
    `
    }
}


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

loadAnimals(animals);
createAnimalList();

