function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
 return document.getElementById('nested').getElementByClass('.target')
}

function increaseRankBy(n) {
  var a =document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<a.length;i++) {
    a[i].innerHTML=parseInt(a[i].innerHTML)+n;
  }
}

function deepestChild(){
  
}