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

function deepestChild(){
  let current= document.querySelector('grand-node')
  let next= node.children[0]
  
  while (next){
    current=next
    next
  }
  
}