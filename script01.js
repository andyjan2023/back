
// var u1=prompt("enter name")
// var p1=prompt("pasword?")
// function signin (a,b){
// if (data.user===u1 && data.pass===p1){console.log("yes")}
// else {console.log("no")};}
// signin(u1,p1)

// var list=["a","b","c","b"];
// for(var i=0;i<list.length;i++){list[i]=list[i]+"!";}
// console.log(list)

// var count=0;
// while(count<10){console.log(count);count++}

// var count=0;
// do{console.log(count);count++;} while(count<10);

// var list=["akk","bkk","ckk","bkk"];

// function dis(a,i){console.log(a,i)}
// list.forEach(dis)

// function imp(a){console.log(a+"!")}
// list.forEach(imp)

// var button=document.getElementsByTagName("button")

// var button= document.querySelector("button");
// var userinput= document.getElementsByTagName("input")[0];
// var ul=document.querySelector("ul");
// var pp= document.getElementsByTagName("p")[0];

// var shoping=document.getElementsByTagName("h1")[0]
// shoping.style.color="purple";
// shoping.parentElement.style.color="blue";
// var lii =document.createElement("div");
// lii.innerHTML="dejjeed";
// lii.appendChild(document.createTextNode("  123"));
// pp.appendChild(lii);


// function length(){return userinput.value.length;}
// function create(){var li= document.createElement("li");
// li.appendChild(document.createTextNode(userinput.value));
// ul.appendChild(li);
// userinput.value="";}

// button.addEventListener("click", function(){
//   if (length()>0){create()}
// })

// userinput.addEventListener("keypress", function(event){
//     if(length()>0&& event.which===13){
//       create()}
//     })  

var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body=document.getElementById("gradient")

function getg(){
  body.style.background = "linear-gradient(to right," 
   +color1.value +
   ", " 
  + color2.value + 
  ")";
} 

color1.addEventListener("input",getg);

color2.addEventListener("input", getg);
console.log(color1.value)

// explain::https://www.reddit.com/r/learnjavascript/comments/i39r1l/what_is_the_difference_between_calling_a_function/
// https://stackoverflow.com/questions/30751892/difference-of-calling-a-function-with-and-without-parentheses-in-javascript