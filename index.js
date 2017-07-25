function getFirstSelector(selector){
return document.querySelector(selector)

}
function nestedTarget(){
return document.querySelector('#nested .target')
}
function deepestChild(){
var node=document.querySelector('#grand-node')  
var nextnode=node.children[0]
while (nextnode) {
node=nextnode
nextnode=node.children[0]  
}
return node
}
function increaseRankBy(n){
var rankedlist= document.querySelectorAll('.ranked-list li')
for (var i = 0; i < rankedlist.length; i++) {
  rankedlist[i].innerHTML=parseInt(rankedlist[i].innerHTML)+n
}return rankedlist
}