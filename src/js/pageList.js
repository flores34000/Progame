import {pageDetail} from './pageDetail';
import {home} from './home';
const btnSearch = document.querySelector('#btn')
const inputSearch = document.querySelector('#input-search')
let header = document.querySelector('.header-para')
let body = document.querySelector('body')


const pageList = (argument = "") => {
    const api = process.env.API;
    const render = () => {
      console.log(header)
       
      fetch("https://api.rawg.io/api/games?page_size=9&search=" + inputSearch.value + "&key=" + api)
        .then((item) => item.json())
        .then((games) => {
          pageContent.innerHTML = ""
          header.innerHTML = ""
          console.log(games.results);
          
          games.results.forEach((element) => {
            let arrayPlatforms = []
            element.platforms.forEach((item)=>{
              arrayPlatforms.push(item.platform.name);
            })
      
        pageContent.innerHTML += `
        <div class="card m-4  ">
          <img class="card-img-top" src="${element.background_image}"   alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title" >
              <a href="#pagelist/${element.name}" data-id="${element.id}">
              ${element.name}
              </a>
            </h5>
            <p class="card-text">${arrayPlatforms}</p>
          </div>
        </div>`
        ;
    });
          
        
        
    const cards = document.querySelectorAll('.card-title')

    const details = function (e){
      
      fetch("https://api.rawg.io/api/games/"+ e.target.dataset.id +"?key=" + api)
   .then((item) => item.json())
   .then((game) => {
    pageContent.innerHTML =""
    header.classList.add("hidden")
    let arrayDeveloper = []
    game.developers.forEach((item)=>{
      console.log(item.name)
      arrayDeveloper.push(item.name);
    
      })
    console.log(game)

    body.innerHTML += `
    <div>
      <img  class='img-fluid' src="${game.background_image}"
    </div>
    
    <div class= 'container-fluid mt-5'>
      <div>
        <h2>${game.name}</h2>
          <p>${game.description}</p>
      </div>
      
      <div>
        <ul>
          <li><span>Date de sortie:</span> ${game.released}</li>
          <li><span>Studio:</span> ${arrayDeveloper}</li>
          <li class='list-red'><span>Moyenne des notes:</span> ${game.  rating}   pour ${game.ratings_count} votes </li>
        </ul>
      </div>

      <div>
        <h2>SCREENSHOTS</h2>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 mb-4">
          <img src="${game.background_image}" class="img-fluid mb-4" alt="">
        </div>

        <div class="col-lg-6 col-md-6 mb-4">
          <img src="${game.background_image_additional}" class="img-fluid mb-4" alt=""
            data-wow-delay="0.1s">
        </div>
      </div>
    </div>`
        
  }
  )
}

cards.forEach(item => {
 item.addEventListener('click', details);
})
});
};
btnSearch.addEventListener('click',render)    
};
export {pageList};
        
            
  
    
      
      
      

       

      
        

       


      
