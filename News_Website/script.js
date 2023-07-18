const API_KEY = "pub_2639735eefe9b3a3bd9aac5ba41d4c520c304";
const url = "https://newsdata.io/api/1/news";

window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
  const res = await fetch(`${url}?apikey=${API_KEY}&q=${query}`);
  const data = await res.json();
  bindData(data.results);
}

function bindData(articles) {
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.image_url) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector(".news-source");
  const newsDesc = cardClone.querySelector(".news-desc");

  newsImg.src = article.image_url;
  newsTitle.innerHTML = article.title;

  const date = new Date(article.pubDate).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });
  newsSource.innerHTML = `${date}`;
  newsDesc.innerHTML = article.description;
  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.link, "_blank");
  });
}

let curSelectedNav = null;
function onNavItemClick(id){
fetchNews(id);
const navItem = document.getElementById(id);
curSelectedNav?.classList.remove('active');
curSelectedNav = navItem;
curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click",()=>{
  const query = searchText.value;
  if(!query)return;
  fetchNews(query);
  curSelectedNav?.classList.remove("active");
  curSelectedNav=null;
});

function reload(){
  window.location.reload();
}