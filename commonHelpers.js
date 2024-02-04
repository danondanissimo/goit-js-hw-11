import{S as c,i as m}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const u=document.querySelector(".js-search-form"),o=document.querySelector(".js-photo-container"),n=document.querySelector(".loader");n.style.display="none";u.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.query.value;g(t).then(r=>{p(r)}),s.target.reset()});function g(s){const t="https://pixabay.com/api/",r=`?key=42185111-4f5cd61d4ffab1c12875fcbb6&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,i=t+r;return n.style.display="inline-block",fetch(i).then(e=>{if(e.ok)return e.json();throw new Error(e.status)})}function d(s){return s.hits.map(t=>`<li class="gallery-item"><a class="gallery-link" href="${t.largeImageURL}">
    <img
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
      class="gallery-image"
      
    /></a>  

  <div class="image-stats-block">
<ul class="image-stats-list">
  <li class="image-stats-item"><p class="image-stats-text">Likes:<br><span class="image-stats-value">${t.likes}</span></p>
</li>
<li class="image-stats-item">
  <p class="image-stats-text">Views:<br><span class="image-stats-value">${t.views}</span></p>
</li>
<li class="image-stats-item">
  <p class="image-stats-text">Comments:<br><span class="image-stats-value">${t.comments}</span></p>
</li>
<li class="image-stats-item">
  <p class="image-stats-text">Downloads:<br><span class="image-stats-value">${t.downloads}</span></p>
</li>
</ul>
  </div></li>`).join("")}const f=new c(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){if(o.replaceChildren(),s.hits.length===0)m.show({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,closeOnEscape:!0}),n.style.display="none";else{const t=d(s);o.insertAdjacentHTML("afterbegin",t),f.refresh()}}
//# sourceMappingURL=commonHelpers.js.map
