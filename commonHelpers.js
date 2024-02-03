import"./assets/vendor-491d46cf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const c=document.querySelector(".js-search-form"),a=document.querySelector(".js-photo-container");c.addEventListener("submit",t=>{t.preventDefault();const r=t.target.elements.query.value;l(r).then(n=>{d(n)})});function l(t){const r="https://pixabay.com/api/",n=`?key=42185111-4f5cd61d4ffab1c12875fcbb6&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,i=r+n;return fetch(i).then(e=>e.json())}function u(t){return`<div>
  <div class="image-container">
    <img
      src="${t.hits.webformatURL}"
      alt="#"
      
    />
  </div>
  <div>

      Likes:${t.hits.likes}, Views:${t.hits.views}, Comments:${t.hits.comments}, Downloads:${t.hits.downloads}
    </p>
  </div>
</div>`}function d(t){const r=u(t);a.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=commonHelpers.js.map
