//filter method:----

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); 

const people = [
   { name: 'Alice', age: 25, status: 'active' },
   { name: 'Bob', age: 30, status: 'inactive' },
   { name: 'Charlie', age: 35, status: 'active' },
   { name: 'David', age: 40, status: 'inactive' },
   { name: 'Eve', age: 22, status: 'active' }
];
const p=people.filter((item)=>{
   return item.age>25
})
console.log(p);
let p2=[];
p2=people.filter((num)=>{
   return (num.status=='active');
});
console.log(p2);


//map method
const nums=[1,2,3,4,5,6,7,8,9];
const doublenums=nums.map((item)=> {return item*2});
console.log(doublenums);

//chaining multiple methods
const spnum=nums.map((item)=> item+10).map((item)=>item+2);
console.log(spnum);

//reduce method
const mynums=[1,2,3];
const sum=mynums.reduce((acc,currval)=>{return acc+currval},0);
console.log(sum);