import { animes, characters } from './data.js';

if(document.querySelector('.animes')){
document.querySelector('.animes').innerHTML = animes.map((anime) => {
  return `
  <div class="card" style="width: 21.4rem" id="card">
                <img src="${anime.img}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${anime.title}</h5>
                  <p class="card-text" style="font-size: 1.2rem">${anime.desc}</p>
                  <a href="about.html" class="btn btn-primary">View more</a>
                </div>
              </div>`
}).join('');}

if(document.querySelector('#characters')){
document.querySelector('#characters').innerHTML = characters.map((character) => {
  console.log(characters)
  return `
  <div class="card" style="width: 21.4rem" id="card">
              <img
                src="${character.img}"
                class="card-img-top"
                alt="..."
              />
              <div
                class="card-body d-flex justify-content-between align-items-center"
              >
                <h5 class="card-title" id="name">${character.name}</h5>

                <a href="character1-info.html" class="btn btn-primary"
                  ><i class="fa-solid fa-magnifying-glass"></i
                ></a>
              </div>
            </div>`
}).join('');}