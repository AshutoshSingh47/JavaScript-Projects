const API_KEY = "bda028be399343f7bfc8b7e7e9732103";
const url = "https://api.worldnewsapi.com/search-news?text=";

window.addEventListener("load", () => fetchNews("India"));

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&api-key=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  bindData(data.news);
}


function bindData(articles){
const cardsContainer = document.getElementById("cards-container");
const newsCardTemplate = document.getElementById("template-news-card");

cardsContainer.innerHTML="";

articles.forEach(article => {
  if(!article.image) return;
  const cardClone = newsCardTemplate.content.cloneNode(true);
  fillDataInCard(cardClone, article);
  cardsContainer.appendChild(cardClone);

});
}

function fillDataInCard(cardClone, article){
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector(".news-source");
  const newsDesc = cardClone.querySelector(".news-desc");

  newsImg.src=article.image;
  newsTitle.innerHTML=article.title;
  
  const date =new Date(article.publish_date).toLocaleString("en-US",{
    timeZone:"Asia/Jakarta"
  });
  const newsDescription = article.text;
  newsSource.innerHTML=`${article.author} - ${date}`;
  newsDesc.innerHTML=newsDescription.slice(0,300);

  cardClone.firstElementChild.addEventListener("click",()=>{
    window.open(article.url,"_blank");
  })
}