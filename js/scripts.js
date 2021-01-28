var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};

var colors = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','a'];

var elBtn = $_('.btn');

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}


function changeBg() {
  var hex = '#';
  for(var i = 0; i < 6; i++) {
    hex +=`${colors[getRandomNumber(colors)]}`
    document.body.style.backgroundColor = `${hex}`;
  }
}

elBtn.addEventListener('click', changeBg);
