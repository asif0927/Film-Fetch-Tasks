var body=document.querySelector("body");
var row=document.querySelector(".row")
function getApi(){
   fetch("https://restcountries.com/v3.1/all")
   .then((response) => response.json())
   .then((data) => {
    data.forEach(element => {
      row.innerHTML+=`
        <div class="card col-3 mt-3 pl-3" style="width: 18rem;">
         <img class="card-img-top" src="${element.flags.png}" alt="Card image cap">
         <div class="card-body">
         <h5 class="card-title">${element.name.common}</h5>
         <p class="card-text">Capital:${element.capital}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
        </div>
        ` 
    });
    })
}

getApi()