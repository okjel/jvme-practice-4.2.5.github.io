!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3)},function(e,t,n){},function(e,t){function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o,a,i,c=document.querySelector(".input"),u=document.querySelector(".options-container"),s=document.querySelector(".repos"),d=document.querySelector(".search");document.addEventListener("DOMContentLoaded",v),window.addEventListener("storage",v),c.addEventListener("input",(o=function(e){var t=e.target.value;if(""!==t){var r=new URL("https://api.github.com/search/repositories");r.searchParams.set("q",t),d.classList.toggle("search--loader"),fetch(r).then((function(e){return e.json()})).then((function(e){m(u);var t=e.items.filter((function(e,t){return t<5})).map((function(e){return{id:e.id,name:e.full_name,owner:e.owner.login,stars:e.stargazers_count}}));l=n(t),t.forEach((function(e){var t=function(e){var t=document.createElement("div");return t.classList.add("option"),t.textContent=e.name,t.dataset.id=e.id,t}(e);u.prepend(t)})),d.classList.toggle("search--loader")}))}else m(u)},a=1e3,i=0,function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];clearTimeout(i),i=setTimeout((function(){return o.apply(e,n)}),a)})),u.addEventListener("click",(function(e){if(void 0===e.target.dataset.id)return;c.value="",m(u);var t=l.find((function(t){return t.id===+e.target.dataset.id}));f.push(t),y(f);var n=p(t);s.append(n)})),s.addEventListener("click",(function(e){if(!e.target.classList.contains("btn--theme_delete"))return;var t=e.target.closest(".repo");if(!t)return;y(f=f.filter((function(e){return e.id!==+t.dataset.id}))),t.remove()}));var l=[],f=[];function p(e){var t=document.createElement("div");t.classList.add("repo"),t.dataset.id=e.id;var n=document.createElement("div");n.classList.add("repo__info"),t.append(n);var r=document.createElement("div");r.className="repo__btn-close btn btn--theme_delete",t.append(r);var o=document.createElement("p");o.classList.add("repo__name"),o.textContent="Name: ".concat(e.name),n.append(o);var a=document.createElement("p");a.classList.add("repo__owner"),a.textContent="Owner: ".concat(e.owner),n.append(a);var i=document.createElement("p");return i.classList.add("repo__stars"),i.textContent="Stars: ".concat(e.stars),n.append(i),t}function m(e){n(e.childNodes).forEach((function(t){return e.lastChild.remove()}))}function v(){var e=localStorage.getItem("favoritesRepos");e&&(m(s),JSON.parse(e).forEach((function(e){var t=p(e);s.append(t)})))}function y(e){var t=[].concat(n(JSON.parse(localStorage.getItem("favoritesRepos"))),n(e));localStorage.setItem("favoritesRepos",JSON.stringify(t))}}]);
//# sourceMappingURL=bundle.js.map