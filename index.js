function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");

}

function increaseRankBy(n) {
  var a =document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<a.length;i++) {
    a[i].innerHTML=parseInt(a[i].innerHTML)+n;
  }
}

function deepestChild() {
    var current = document.getElementById('grand-node')
    var i = 0
    while (current.firstElementChild) {
      i = i + 1
      current = current.firstElementChild
    }
    return current
}