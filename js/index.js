'use strict';

var api_key = 'YMfhCRtAx8EhdBH9LhNmQ8mVvUmpJQRo';
var root = document.getElementById('root');
var bar = document.getElementById('search');

//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
function remove() {
  while (root.hasChildNodes()) {
    console.log(root);
    root.removeChild(root.lastChild);
  }
}

function set(href) {
  var img = document.createElement('IMG');

  img.setAttribute('src', href);
  root.appendChild(img);
}

function search() {
  var busqueda = arguments.length <= 0 || arguments[0] === undefined ? 'random' : arguments[0];
  var url = 'https://api.giphy.com/v1/gifs/search?q=';
  var search = '' + url + bar.value + '&api_key=' + api_key + '&limit=15';

  fetch(search).then(function (response) {
    return response.json();
  })
  .then(function (response) {
      response.data.forEach(function (href) {
        set(href.images.fixed_height.url);
      });
  });
}

bar.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    remove();
    search();
  }
});