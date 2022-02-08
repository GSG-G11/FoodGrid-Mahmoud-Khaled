const countries=document.querySelector(".countries")
const Section2=document.querySelector(".sec2")
let countryUrl="https://www.themealdb.com/api/json/v1/1/list.php?a=list"

function fetch(url,cb){
let xhr=new XMLHttpRequest();
xhr.onreadystatechange=()=>{

if (xhr.readyState===4){
switch (xhr.status){
    case 200:
let data=JSON.parse(xhr.responseText)
console.log(data)

cb(data)

break ;
default:

    Section2.textContent=" NO Cuisine Available"

}}} 
xhr.open("GET",url)
xhr.send()



}

function cc(){

    console.log("SSS")
}

function renderCountries(country){
   
    country.meals.forEach(ele => {
        
      

    //     <div class="cuisine">
    //     <p class="country">British Cuisine</p>
    //     <button class="go-meals">Show Meals</button>
    //   </div>
    const cuisineCard=document.createElement("div")
    const countryNamePara=document.createElement("p")
    const countryBtn=document.createElement("button")
    const link=document.createElement("a")



    cuisineCard.setAttribute("class","cuisine")
    countryNamePara.setAttribute("class","country")
    countryBtn.setAttribute("class","go-meals")


    countryBtn.textContent="Show Meals"


    countries.appendChild(cuisineCard)
    cuisineCard.appendChild(countryNamePara)
    cuisineCard.appendChild(link)
    link.appendChild(countryBtn)
    

    countryNamePara.textContent=ele.strArea
    link.href="./meals.html"

    });
       
   




}


fetch(countryUrl,renderCountries)
