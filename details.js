function getWithFetch(){
    let id=document.location.search.slice(4)
    var container=document.querySelector(".container")
    fetch(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json())
     .then((data) => {
          container.innerHTML+=`
            <div class="card col-3 mt-3" >
             <img class="card-img-top" src="${data.image.medium}" alt="Card image cap">
             <div class="card-body">
             <h5 class="card-title">${data.name}</h5>
             <p class="card-text"></p>
             <a href="details.html?id:${data.id}" class="btn btn-primary">Go somewhere</a>
             </div>
             <div class="card-footer">
             ${data.summary}</div>
            </div>
            
            ` 
  });
}   
getWithFetch()
function getWithAxios(){

}