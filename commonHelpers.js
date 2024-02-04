import{S as l}from"./assets/vendor-b41a7778.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const o=document.querySelector(".js-search-form"),c=document.querySelector(".js-photo-container");o.addEventListener("submit",a=>{a.preventDefault();const t=a.target.elements.query.value;m(t).then(r=>{d(r)})});function m(a){const t="https://pixabay.com/api/",r=`?key=42185111-4f5cd61d4ffab1c12875fcbb6&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`,i=t+r;return fetch(i).then(e=>{if(e.ok)return e.json();throw new Error(e.status)})}function u(a){return a.hits.map(t=>`<li class="gallery-item"><a class="gallery-link" href="${t.largeImageURL}">
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
  </div></li>`).join("")}const f=new l(".gallery a",{captionsData:"alt",captionDelay:250});function d(a){const t=u(a);c.insertAdjacentHTML("beforeend",t)}f.refresh();
//# sourceMappingURL=commonHelpers.js.map
