const arr =[1,2,3,4,5]; 
for(let val of arr){
  console.log(val);
}
//map
const map=new Map();
map.set("Abhishek",1);
map.set("Aditya",2);
map.set("rahul",3);
//forof loop
for(let[key,value]of map){
  console.log(key,value);
}
for(let key of map){
  console.log(key);
}
//forin
for(let value in arr){
console.log(value);
}
//forEach loop
arr.forEach(function(value){
  console.log(value);
})
arr.forEach((item,index,arr)=>{console.log(item,index,arr)});