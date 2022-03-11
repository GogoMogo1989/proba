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

const user2 = [{
  id: 2136523,
  username: "lajosnagy",
  email: "lajos@gmail.com",
  phone: "303214321",
  isConfirmed: true
}]

const user3 = [{
  id: 8743534,
  username: "akarki99",
  email: "kazmer@gmail.com",
  phone: "206546547",
  isConfirmed: false
}]

let newUser3=user3.map(newArray = (user123) => {
  let b={name: user123.username,
    email: user123.email,
    phone: user123.phone}
return b
})


const numbers = ["a", "a", "b", "b", "b", "a", "c", "c", "c", "b"]

let count={}

numbers.forEach(item =>{
  if(count[item]){
    count[item]++
  }else{
    count[item]=1
  }
  return item
})





/* console.log(count) */


let list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];


function getFirstPython(list) {

  let a=list.find(kutya)
  
  function kutya(value){
      return value.language ==="Python"
  }

  return(a? `${a.firstName}, ${a.country}`:"There will be no Python developers")

 
 
}
getFirstPython(list1)






/* ----------------------------------------feladat határ------------------------- */

var list2 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 33, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

function senior(list){

  let newList = list.reduce(oldest)
  
  function oldest(accumulator, value){

      if(accumulator>value.age){
      return accumulator
      }else{
      return value.age
      }

  }

  let beka = list.filter(milter)

  function milter(value){

    return value.age === newList

  }

  /* console.log(beka) */

}

/* senior(list2) */


/* --------------------------------------következő feladat------------------------------------------- */

let list3 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];


function isRubyComing(list) {
  // thank you for checking out my kata :)
  let b = list.some(kutya)

  function kutya(value){
    return value.language ==="Ruby"
  }
return(b)
}

isRubyComing(list3)

/* ----------------------------------------------Feladat határ-------------------------------------------        */
var list56 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];


function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)

let count={}

  list.forEach(item =>{
    if(count[item.language]){
      count[item.language]++
    }else{
      count[item.language]=1
    }})
  
  }
console.log(count)
isSameLanguage(list56)