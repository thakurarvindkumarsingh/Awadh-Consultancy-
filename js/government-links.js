const container=document.getElementById("serviceContainer");
const searchInput=document.getElementById("searchInput");
const count=document.getElementById("serviceCount");

let favorites=JSON.parse(localStorage.getItem("favorites"))||[];

renderServices(governmentServices);
renderFavorites();

function renderServices(list){

container.innerHTML="";

count.innerText=`${list.length} Services Found`;

list.forEach(service=>{

const saved=favorites.includes(service.id);

container.innerHTML+=`

<div class="gov-card">

<div class="gov-icon">
<i class="fa-solid ${service.icon}"></i>
</div>

<h3>${service.title}</h3>

<p>${service.description}</p>

<div class="gov-actions">

<a class="visit-btn" href="${service.url}" target="_blank">
Visit
</a>

<i
class="fa-bookmark fa-regular bookmark ${saved?"saved":""}"
onclick="toggleFavorite(${service.id})">
</i>

</div>

</div>

`;

});

}

/* Search */

searchInput.addEventListener("keyup",(e)=>{

const keyword=e.target.value.toLowerCase();

const filtered=governmentServices.filter(service=>

service.title.toLowerCase().includes(keyword) ||
service.description.toLowerCase().includes(keyword)

);

renderServices(filtered);

});

/* Category Filter */

document.querySelectorAll(".filter-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

document.querySelector(".filter-btn.active").classList.remove("active");

btn.classList.add("active");

const category=btn.dataset.filter;

if(category==="all"){
renderServices(governmentServices);
return;
}

const filtered=governmentServices.filter(
service=>service.category===category
);

renderServices(filtered);

});

});

/* Bookmark */

function toggleFavorite(id){

if(favorites.includes(id)){

favorites=favorites.filter(item=>item!==id);

}else{

favorites.push(id);

}

localStorage.setItem("favorites",JSON.stringify(favorites));

renderServices(governmentServices);
renderFavorites();

}

/* Favourite Section */

function renderFavorites(){

const favContainer=document.getElementById("favoriteContainer");

const favItems=governmentServices.filter(service=>
favorites.includes(service.id)
);

if(favItems.length===0){

favContainer.innerHTML="<p>No bookmarked services yet.</p>";
return;

}

favContainer.innerHTML="";

favItems.forEach(service=>{

favContainer.innerHTML+=`

<div class="gov-card">

<div class="gov-icon">
<i class="fa-solid ${service.icon}"></i>
</div>

<h3>${service.title}</h3>

<p>${service.description}</p>

<div class="gov-actions">

<a class="visit-btn" href="${service.url}" target="_blank">
Visit
</a>

</div>

</div>

`;

});

}
