//Code your solution here

function getFirstSelector (selector) {
  return document.querySelector(selector);
}

<<<<<<< HEAD
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list')
  
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
=======
function nestedTarget(#nested) {
  return document.querySelector(#nested); 
>>>>>>> 812cbfb68bfb3587fdd37a4452a4446f69336145
}