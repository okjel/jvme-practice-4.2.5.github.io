!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2),r(3)},function(e,t,r){},function(e,t){function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o,a,i,c=document.querySelector(".input"),s=document.querySelector(".options-container"),u=document.querySelector(".repos"),d=document.querySelector(".search");document.addEventListener("DOMContentLoaded",p),window.addEventListener("storage",p),c.addEventListener("input",(o=function(e){var t=e.target.value;if(""!==t){var n=new URL("https://api.github.com/search/repositories");n.searchParams.set("q",t),d.classList.toggle("search--loader"),fetch(n).then((function(e){return e.json()})).then((function(e){f(s);var t=e.items.filter((function(e,t){return t<5})).map((function(e){return{id:e.id,name:e.full_name,owner:e.owner.login,stars:e.stargazers_count}}));l=r(t),t.forEach((function(e){var t=function(e){var t=document.createElement("div");return t.classList.add("option"),t.textContent=e.name,t.dataset.id=e.id,t}(e);s.prepend(t)})),d.classList.toggle("search--loader")})).catch((function(e){d.classList.toggle("search--loader"),alert("Сервис недоступен по причине: "+e.message)}))}else f(s)},a=1e3,i=0,function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];clearTimeout(i),i=setTimeout((function(){return o.apply(e,r)}),a)})),s.addEventListener("click",(function(e){if(void 0===e.target.dataset.id)return;c.value="",f(s),function(e){var t=JSON.parse(localStorage.getItem("favoritesRepos"));t||(t=[]);var n=[].concat(r(t),[e]);localStorage.setItem("favoritesRepos",JSON.stringify(n)),p()}(l.find((function(t){return t.id===+e.target.dataset.id})))})),u.addEventListener("click",(function(e){if(!e.target.classList.contains("btn--theme_delete"))return;var t=e.target.closest(".repo");if(!t)return;r=+t.dataset.id,n=JSON.parse(localStorage.getItem("favoritesRepos")).filter((function(e){return e.id!==r})),localStorage.setItem("favoritesRepos",JSON.stringify(n)),p(),t.remove();var r,n}));var l=[];function f(e){r(e.childNodes).forEach((function(t){return e.lastChild.remove()}))}function p(){var e=localStorage.getItem("favoritesRepos");e&&(f(u),JSON.parse(e).forEach((function(e){var t=function(e){var t=document.createElement("div");t.classList.add("repo"),t.dataset.id=e.id;var r=document.createElement("div");r.classList.add("repo__info"),t.append(r);var n=document.createElement("div");n.className="repo__btn-close btn btn--theme_delete",t.append(n);var o=document.createElement("p");o.classList.add("repo__name"),o.textContent="Name: ".concat(e.name),r.append(o);var a=document.createElement("p");a.classList.add("repo__owner"),a.textContent="Owner: ".concat(e.owner),r.append(a);var i=document.createElement("p");return i.classList.add("repo__stars"),i.textContent="Stars: ".concat(e.stars),r.append(i),t}(e);u.append(t)})))}}]);
//# sourceMappingURL=bundle.js.map