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






/* ----------------------------------------feladat hat??r------------------------- */

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

  return beka

}

senior(list2)


/* --------------------------------------k??vetkez?? feladat------------------------------------------- */

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
return b
}

isRubyComing(list3)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */
var list56 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: "JavaScript" },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];


function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
let language = list.every(kutya)

function kutya(value){
  return value.language===list[0].language
}

return language
}




isSameLanguage(list56)



/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

var list34t5 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agust??n', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: "Oceanic", age: 65, language: 'PHP' },
];

function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)
  let b = list.map(kutya)
  const continent = ["Africa","Americas", "Asia", "Europe", "Oceanic"]



  if(b[0,1,2,3,4]=c[0,1,2,3,4]){
    return true
  }else{
    return false
  } 
}  

/* allContinents(list34t5) */

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

let beka=[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]

const whosOnline = friends =>
  friends.reduce((activities, { username, status, lastActivity }) => {
    const realStatus = status === 'online' && lastActivity > 10 ? 'away' : status
    return { ...activities, [realStatus]: activities[realStatus] ? [...activities.realStatus, username] : [username] }
  }, {})
whosOnline(beka)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

var list3456 = [  
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];

function sortByLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)

  const ar2= list.sort(cica)
  function cica(a,b){
    if(a.firstName<b.firstName){
      return -1
    }else if(a.firstName>b){
      return 1
    }else{
      return 0
    }
  }


  

  const ar = list.sort(kutya)
  function kutya (a, b){
  
    if(a.language < b.language){
      return -1;
    }else if(a.language > b.language){
      return 1;
    }else{
      return ar2;
    }
  };
  return ar
 
}
sortByLanguage(list3456)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

let listmist= [
  "abcd", "efgh", "abcde", "fghij", "1234", "56789", "12345678??912344", "aaaaaaaaaaaaaa-aaaaaaaaaaaaaa"
]

function isolateIt(arr){
  //coding here...
  const b=arr.map(kutya)

  function kutya(value){
    if(value.length%2==0){
      let k= value.slice(0,value.length/2)
      let c= value.slice(value.length/2,value.length)
      let v = k +"|"+c
      return v
    }else{
      let i=value.slice(0,value.length/2)
      let j=value.slice(value.length/2+1,value.length)
      let h=i+"|"+j
      return h
    }

  }

  return b
}

isolateIt(listmist)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */
const listwde=[1,1,1,2,2,3]
const listkres=[1,1,1,2,2,2,3,3,3]
const hreus=[1,2,3,4,4,5,5,6,6]

function sortIt(arr){
  //coding here...
  
  
  let b=arr.sort(kutya)

  function kutya(a,b){
    if(a<b){
   return -1
    }if(a>b){
      return 1
    }return 0
  }
/* console.log(b) */
  
}

sortIt(hreus)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

const v = [1, 3, 4, 15, 16, 23, 45.5, 49.3]


function simplifyNumber(n) {
  
  
 /*  if(n<0){
    console.log(0)
  }else if(n>10){
    console.log("sok")
  }else{
    console.log(Math.round(n))
  }  */
} 


simplifyNumber()


/* ----------------------------------------------Feladat hat??r-------------------------------------------        */
let k="??ld ??t az ??lm??nyt"


function amplifyBs(n) {

  let times=5
  let k="!"
  let c= n+k
for (let index = 0; index <=5; index++) {
   /*  console.log( n+"!") */
  
}

 
}
amplifyBs(k)


/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

let kuka={
    "id": 1,
    "username": "Kovacs Bela",
    "mostRecentPurchase": {
      "category": "shoes",
      "color": "blue",
      "price": 300
    },
  }


let cica={
    "category": "accessory",
    "color": "red",
    "price": 100
  }


function isGoodRecommendation(user, product) {

  let k={customerName: user.username,
         productColor: product.color,
         isProductRecommended:true}
        
  let b={customerName: user.username,
          productColor: product.color,
          isProductRecommended:false}
  //todo
  if(user.mostRecentPurchase.category !==product.category && user.mostRecentPurchase.color === product.color && user.mostRecentPurchase.price > product.price){
    return k
  }else{
  return b
  }

}

isGoodRecommendation(kuka, cica)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */
let list123456 =[/* "Jacob", "Alex","Barbara", "Sara" */]

function likes(names) {
  // TODO
  const newList=names.map(kutya)

  function kutya(value){
    return value
  }

  if(newList.length===0){
    return "no one like this"
  }
  else if(newList.length===1){
    return`${newList[0]} likes this`
  }else if(newList.length===2){
    return`${newList[0]} and ${newList[1]} like this`
  }else if(newList.length===3){
    return`${newList[0]}, ${newList[1]} and ${newList[2]} like this`
  }else{
    return`${newList[0]}, ${newList[1]} and ${newList.length-2} others like this`
  }

}

likes(list123456)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

let createPhoneNumber1234=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
  
  const monkey=numbers.map(kutya)

  function kutya(value){
    return value
  }

  let c=`(${monkey[0]}${monkey[1]}${monkey[2]}) ${monkey[3]}${monkey[4]}${monkey[5]}-${monkey[6]}${monkey[7]}${monkey[8]}${monkey[9]}`

 return String(c)

}

createPhoneNumber(createPhoneNumber1234)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

let b="the-stealth-warrior"
let c="the_stealth_warrior"
let d="A-B-C"
let e=""

function toCamelCase(str){

  if(str.includes("_")){

    const firstToUC = str.replace(/_/g,' ') //Itt t??r??lj??k ki a vonalakat
    const arr = firstToUC.split(" ");  //Itt rakjuk t??mbbe a felosztott szavakat. l??sd: https://developer.mozilla.org/   /en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split , ??s a for ciklussal tessz??k nagybet??v?? az el??s karaktereket

    
    for (var i = 1; i < arr.length; i++) {

    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }

 
    const str2 = arr.join(" "); // Itt tessz??k egy stringg?? ??ket
    const str3=str2.replace( /\s/g,'') //itt t??r??lk??k ki a space-ket

    return str3

  }else{

    const firstToUC2 = str.replace(/-/g,' ')
    const arr2 = firstToUC2.split(" ");

  
    for (var i = 1; i < arr2.length; i++) {
  
      arr2[i] = arr2[i].charAt(0).toUpperCase() + arr2[i].slice(1);
  
    }
    
    const str4 = arr2.join(" ");
    const str5=str4.replace( /\s/g,'')

    return str5
      
  }

}

toCamelCase(c)


/* ----------------------------------------------Feladat hat??r-------------------------------------------        */
let bubika= 23456


function digital_root(n) {
  // ...
    let digits = n.toString().split(''); //Itt a sz??mot, k??l??n darabja v??gja, ??s stringg?? alak??tja egy t??mben
    let realDigits = digits.map(Number)  //Itt a string?? alak??tott sz??mokat vissza koncert??lja number-r??


    let sum= 0 
    
    for(var i=0; i < realDigits.length; i++){

    sum += realDigits[i]; //Itt t??lti fel a sum nev?? v??ltoz??t, ??gy hogy egy for f??ggv??nyen kereszt??l, ??sszeadja a megl??v?? sz??mokat.
    }


    let digits2 = sum.toString().split('');
    let realDigits2 = digits2.map(Number)

    let sum2= 0
    
    for(var i=0; i < realDigits2.length; i++){

    sum2 += realDigits2[i];
    }

    let digits3 = sum2.toString().split('');
    let realDigits3 = digits3.map(Number)

    let sum3= 0
    
    for(var i=0; i < realDigits3.length; i++){

    sum3 += realDigits3[i];
    }
    
    return sum3
  
}
  

digital_root(bubika)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */
let str="Seriously this is the last one"

function spinWords(string){
//TODO Have fun :)



let str2 = string.split(" ")  //Itt v??lasztom sz??t a szavakat k??l??n-k??l??n
let b=""
  let str3 = str2.map(kutya)  //Itt sz??r??m ki, ??s ford??tom meg az 5-n??l nagyobb, vagy egyenl?? hossz??s??g?? szavakat.



  function kutya(value, index){

    if(value.length>=5){
        str2[index]=value.split("").reverse().join("")
    }else{
      str2[index]=value
    }
   b=str2.join(" ")
  }



  return b

}

spinWords(str)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

let x=3021

function fakeNumber(number) {
  
  let b= number
  .toString()  //sz??vegg?? alak??tja
  .replace(/0/g, "X")  //kicser??l karaktereket a param??terek alapj??n
  .split("") // sz??tv??gja a sz??veget
  .reverse() //megford??tja a sz??veget
  .join(" ");  // itt ??jb??l ??sszerakja
  


return b



 
 

  

}

fakeNumber(x)
/* ----------------------------------------------Feladat hat??r-------------------------------------------        */

let cars=[
  { brand: "Renault", doors: 2, distance: 150000 },
  { brand: "Opel", doors: 4, distance: 25000 },
  { brand: "BMW", doors: 2, distance: 75000 },
]

const sumOfKmsBySmallBMWs = (cars) => {
  
  let c =0

  for(const b of cars){
    if(b.brand === "BMW" && b.doors === 2){
      c += b.distance
    }else{
      c += 0
    } 
  }
 
return c
 



}

sumOfKmsBySmallBMWs(cars)

/* ----------------------------------------------Feladat hat??r-------------------------------------------        */
let movies=[
  { title: "Titanic", genre: "drama", originalLanguage: "english", length: 180 },
  { title: "Shaun of the dead", genre: "comedy", originalLanguage: "english", length: 120 },
  { title: "Star Wars", genre: "comedy", originalLanguage: "english", length: 150 },
]


const getLongestEnglishComedy = (movies) => {


  
    const englishComedies = movies.filter((movie) => {
    return movie.genre === "comedy" && movie.originalLanguage === "english" 
  }) 
  
  const longestEnglishComedy = englishComedies.reduce((prev, curr) => (englishComedies.length === 0) ? null : (prev.length < curr.length) ? curr : prev)
  


console.log(longestEnglishComedy.title)
  return longestEnglishComedy.title
}


getLongestEnglishComedy(movies)


/* ----------------------------------------------Feladat hat??r-------------------------------------------        */





