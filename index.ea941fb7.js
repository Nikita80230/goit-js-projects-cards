!function(){var t="https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=".concat("1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7");var a=document.querySelector(".card__container");(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(t).concat(a)).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)}))})().then((function(t){var c=t.results;console.log(c);var n,e=c.map((function(t){var a=t.title,c=t.abstract,n=t.media,e=t.published_date,r=t.url,o=n[0]["media-metadata"][2].url;return'<div class = "card"><img class="card__img" src="'.concat(o,'" alt="" width="350px" height="500px">\n        <button class="card__btn">add/remove</button>\n        <h3 class="card__title">').concat(a,'</h3>\n        <p class="card__text">').concat(c,'</p>\n        <span class="card__date">published_date: ').concat(e,'</span>\n        <a href="').concat(r,'">read more</a></div>')})).join("");n=e,a.insertAdjacentHTML("beforeend",n)})).catch((function(t){console.log(t.message)}))}();
//# sourceMappingURL=index.ea941fb7.js.map