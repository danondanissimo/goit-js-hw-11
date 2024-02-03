import"./assets/vendor-491d46cf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const c=document.querySelector(".js-search-form"),a=document.querySelector(".js-photo-container");c.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.query.value;l(o).then(n=>{d(n.hits)})});function l(r){const o="https://pixabay.com/api/",n=`?key=42185111-4f5cd61d4ffab1c12875fcbb6&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,s=o+n;return fetch(s).then(e=>console.log(e))}function u({webformatURL:r,largeImageURL:o,tags:n,likes:s,views:e,comments:t,downloads:i}){return`<div class="hero-card card">
  <div class="image-container">
    <img
      src="${r}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <p class="hero-bio">
      Likes:${s}, Views:${e}, Comments:${t}, Downloads:${i}
    </p>
  </div>
</div>`}function d(r){const o=u(r);a.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
