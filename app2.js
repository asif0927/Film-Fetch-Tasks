var row=document.querySelector(".row")








function getFetch(){
  fetch("https://api.tvmaze.com/shows")
  .then((response) => response.json())
  .then((data) => {
        data.forEach(element => {
          row.innerHTML+=`
            <div class="card col-3 mt-3 ps-4 pl-3" style="width: 18rem;">
             <img class="card-img-top" src="${element.image.medium}" alt="Card image cap">
             <div class="card-body">
             <h5 class="card-title">${element.name}</h5>
             <p class="card-text"></p>
             <a href="details.html?id:${element.id}" class="btn btn-primary">Go somewhere</a>
             </div>
            </div>
            ` 
        });
  });
}
getFetch()
function getAxios(){
    axios.get("https://api.tvmaze.com/shows")
    .then((data)=>{
       data.data.forEach(element => {
        row.innerHTML+=`
          <div class="card col-3 mt-3 ml-3 pl-3" style="width: 18rem;">
           <img class="card-img-top" src="${element.image.medium}" alt="Card image cap">
           <div class="card-body">
           <h5 class="card-title">${element.name}</h5>
           <a href="details.html?id:${element.id}" class="btn btn-primary">Go somewhere</a>
           </div>
          </div>
          ` 
      });
    })
}
getAxios()