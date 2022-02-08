const countries = document.querySelector(".countries");
const Section2 = document.querySelector(".sec2");

const searchInput = document.querySelector(".search-content");
const searchBtn = document.querySelector("#search-btn");
const mealsCards = document.querySelector(".meals-container");

let countryValue = localStorage.getItem("0");

let countryUrl = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
let mealsUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryValue}`;

function fetch(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      switch (xhr.status) {
        case 200:
          let data = JSON.parse(xhr.responseText);

          cb(data);

          break;
        default:
          Section2.textContent = " NO Cuisine Available";
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function renderCountries(country) {
  country.meals.forEach((ele) => {
    const cuisineCard = document.createElement("div");
    const countryNamePara = document.createElement("p");
    const countryBtn = document.createElement("button");
    const link = document.createElement("a");

    cuisineCard.setAttribute("class", "cuisine");
    countryNamePara.setAttribute("class", "country");
    countryBtn.setAttribute("class", "go-meals");

    countryBtn.textContent = "Show Meals";

    countries.appendChild(cuisineCard);
    cuisineCard.appendChild(countryNamePara);
    cuisineCard.appendChild(link);
    link.appendChild(countryBtn);

    countryNamePara.textContent = ele.strArea + " Cuisine";
    countryNamePara.id = ele.strArea;
    link.href = "./meals.html";

    link.addEventListener("click", function () {
      console.log(111111);
      localStorage.setItem("0", link.previousSibling.id);
    });
  });
}

function search(obj) {
  searchBtn.addEventListener("click", () => {
    mealsCards.textContent = "";

    obj.meals.forEach((ele) => {
      if (ele.strMeal.toLowerCase().includes(searchInput.value.toLowerCase())) {
        const mealDiv = document.createElement("div");
        const mealImg = document.createElement("img");
        const mealTitle = document.createElement("p");

        mealDiv.setAttribute("class", "meal");
        mealImg.setAttribute("class", "meal-photo");
        mealTitle.setAttribute("class", "meal-name");

        mealsCards.appendChild(mealDiv);
        mealDiv.appendChild(mealImg);
        mealDiv.appendChild(mealTitle);

        mealTitle.textContent = ele.strMeal;
        mealImg.src = ele.strMealThumb;
      }
    });
  });
}

function mealcard(obj) {
  obj.meals.forEach((ele) => {
    const mealDiv = document.createElement("div");
    const mealImg = document.createElement("img");
    const mealTitle = document.createElement("p");

    mealDiv.setAttribute("class", "meal");
    mealImg.setAttribute("class", "meal-photo");
    mealTitle.setAttribute("class", "meal-name");

    mealsCards.appendChild(mealDiv);
    mealDiv.appendChild(mealImg);
    mealDiv.appendChild(mealTitle);

    mealTitle.textContent = ele.strMeal;
    mealImg.src = ele.strMealThumb;
  });
}

fetch(countryUrl, renderCountries);
fetch(mealsUrl, mealcard);
fetch(mealsUrl, search);
