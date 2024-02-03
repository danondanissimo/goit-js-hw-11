import{S as i}from"./assets/vendor-b41a7778.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const l=document.querySelector(".js-search-form"),c=document.querySelector(".js-photo-container");l.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.query.value;u(e).then(n=>{m(n)})});function u(o){const e="https://pixabay.com/api/",n=`?key=42185111-4f5cd61d4ffab1c12875fcbb6&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,s=e+n;return fetch(s).then(t=>{if(t.status===404)throw new Error(response.status);return t.json()})}function f(o){return o.hits.map(e=>`<li class="gallery-item"><a class="gallery-link" href="${e.largeImageURL}">
    <img
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
      class="gallery-image"
      
    /></a>  

  <div class="image-stats">
<p>
      Likes:${e.likes}, Views:${e.views}, Comments:${e.comments}, Downloads:${e.downloads}
    </p>
  </div></li>`).join("")}function m(o){const e=f(o);c.insertAdjacentHTML("beforeend",e)}new i(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
