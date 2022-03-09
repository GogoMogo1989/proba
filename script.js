/* function loadEvent(){
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const cities = [];
    
    // fetch grabs endpoint - at this point a promise and generates readablestream
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => cities.push(...data));
    
    function findMatches(keyword, cities) {
      return cities.filter(place => {
        // does city or state match? use paramater regex
        const regex = new RegExp(keyword, 'gi');
        return place.city.match(regex) || place.state.match(regex)
      });
    }
    
    // add results to HTML li
    function displayMatches() {
      const matchArray = findMatches(this.value, cities)
      const html = matchArray.map(place => {
        
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
          </li>
        `;
      }).join('');
      
      suggestions.innerHTML = html;
    }
    
    const searchInput = document.querySelector('.search-input');
    const suggestions = document.querySelector('.suggestions');
    
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
    
    


}
window.addEventListener("load", loadEvent) */

/* const shopData=[{
  name: "laptop",
  price: 5000,
  piece: 6
},
{
  name: "watch",
  price: 2000,
  piece:2
},
{
  name: "tabelt",
  price: 3500,
  piece: 6,
}
]

const money=shopData.map(nameAndPrice)
 

function nameAndPrice(name){
  return name.price*name.piece
}

console.log(money) */

/* let str= "https://codecool.com "
 let b=str.slice(8,-5)
let c= b.charAt(0).toUpperCase() + b.slice(1);

console.log(c) */

const user1 = {
  id: 3242342,
  username: "belakovacs12",
  email: "bela@gmail.com",
  phone: "701231231",
  isConfirmed: true
}

const user2 = {
  id: 2136523,
  username: "lajosnagy",
  email: "lajos@gmail.com",
  phone: "303214321",
  isConfirmed: true
}

const user3 = {
  id: 8743534,
  username: "akarki99",
  email: "kazmer@gmail.com",
  phone: "206546547",
  isConfirmed: false
}


function getUserIdentifiers(user3) {
  // todo
  console.log(user3.id)
 
  
  }
  


