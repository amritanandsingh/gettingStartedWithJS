console.log('hello amrit');
const roll=8;
 let name='amrit';
console.log(name);
console.log(roll);
let student ={
name :'amrit', age:30 }; 
console.log(student);
student.name='vishal';
console.log(student);
let arr=['red','black'];
console.log(arr[3]);

function greet(name){
    console.log("hello "+name);
}
greet('vishal');

function s(number)
{
    return number*number;
}
console.log(s(20));

let x=9;
let y=9;
console.log(x+y);
console.log(x**y);
// strict equality
console.log(x===y);
//loss equality
console.log('9'==y);

let type=x>1 ? 'grater than 1' : 'smaller than 1';
console.log(type);
console.log(true&&true);

console.log(true&&false);
let h=20;
if(h>=4 && h<12)
{
    console.log('good morning');
}
else if(h>=12 && h <16)
{
    console.log('good afternoon');
}
else if(16>=h && 20<h)
{
    console.log('good evening');
}
else{
    console.log('good night');
}
for(let i=0;i<100000000;i++)
console.log(i+=i);
//for in loop
const name1=['amrit','anand','singh'];
for( let x in name1){
    console.log(x);
}
for( let x of  name1){
    console.log(x);
}

function s(a,b)
{
    if(a>b)
    return a;
    else{
        return b;
    }

}
console.log(s(56,34));

function fizzbuzz(input)
{   if(typeof input !=='number')
    return 'not number';
   else if(input%5===0 && input%3===0)
    return 'FizzBuzz';
    else if(input%3===0)
    return 'Fizz';
    else if(input%5===0)
    return 'Buzz';
    else if(input%5!==0 || input%3!==0)
          return input;
          else{
              return isNaN(input);
          }
}
console.log(fizzbuzz('fafa'));

function checkspeed(speed)
{
    let a=0;
    a=speed-70;
    a=a/5;
    if(a<=0)
    return 'OK';
    else{
        if(a<12)
        return Math.floor(a);
        else{
            return 'suspended';
        }
    }
}
console.log((checkspeed(180)));

//truthy and falsy

const array=[0,null,undefined,1,'',2,3];

function countTruthy(array1)
{  let count=0;
    for(let x of array1)
    {
       if(x)
       count++;
    }
    return count;
}
console.log(countTruthy(array));

const movi1={
    title:'a',
    releaseYear:2018,
    reating:4.5,
    director:'b'
}
function ShowProperty(obj)
{
    for(let x  in obj)
    {
        if(typeof obj[x]==='string')
        {
            console.log(x,obj[x]);
        }
    }
}
ShowProperty(movi1);

function sum(number)
{   let ans=0;
    let i=1;
    let three =3;
    let five=5;
    while((i*three)<=number)
    {
       ans+= three*i;
       i++;
    }
    i=1;
    while((i*five)<=number)
    {  
       ans+= five*i;
       
       i++;
    }
    return ans;
}
console.log(sum(10));
 
function calculateGrade(marks)
{
   if(marks>=1&&marks<=59)
   return 'F';
   if(marks>=60&&marks<=69)
   return 'D';
   if(marks>=70 && marks <= 79)
   return 'C';
   if(marks>=80 && marks <= 89)
   return 'B';
   if(marks>=90 && marks <= 100)
   return 'A';  
}
console.log(calculateGrade(17));
 
function showstars(num)
{
    for(let i=1;i<=num;i++)
    {    p='';
        for(let j=1;j<=i;j++)
       { 
           p+='*';
       }
       console.log(p);
    }
}

showstars(3);

function showprime(num)
{
    for( let i=1;i<=num;i++)
    {   let count =0;
        for(let j=1;j<=i;j++)
        {
            if(i%j==0)
            count++;
        }
        if(count==2)
        console.log(i);
    }
} 

showprime(100);

