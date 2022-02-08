const countries=document.querySelector(".countries")
const countryName=document.querySelector(".country")
const mealsBtn=document.querySelector("go-meals")
const Section2=document.querySelector("sec2")


function fetch(url,cb){
let xhr=new XMLHttpRequest();
xhr.onreadystatechange=()=>{

if (xhr.readyState===4){
switch (xhr.status){
    case 200:

console.log("S")

break ;
default:

    Section2.textContent=" NO Cuisine Available"

}}
}xhr.open()

}