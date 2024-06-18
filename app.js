// console.log("Hello world");
// let  a =5;
// let b =7;

// console.log("sum is: "+ a+b );


// let pencilPrice=10;
// let penPrice=6;
// let output= "The total price is:" + (pencilPrice+penPrice)+"Rupees.";
// console.log(output);

// let pencilPrice=10;
// let penPrice=6;
//  console.log(`The total price is: ${pencilPrice+penPrice} Rupees.`);
 
// Arithmetic operator
// let a=5;
// let b=6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// practice question based on traffic light

// let color = "green";
// if (color=="red"){
//     console.log("stop! light color is red")
// }

// if (color==="yellow"){
//     console.log("go Slowly ! ligt color is yellow" );
// }

// if(color==="green"){
//     console.log("Go Now Clearly ! light color is green");
// }

// let age=12;
// if(age>= 18){
//     console.log("You can vote")
// }
// else if(age<=13){
//     console.log("You cantnot vote")
// }
// else if(age>24){
//     console.log("You can vote easliy way")
// }

// let marks=20;
// if(marks>= 80){
//     console.log("A+")
// }
// else if(marks>=60){
//     console.log("B")
// }
// else if(marks>=33){
//     console.log("C")
// }
// else if(marks<33){
//     console.log("Fail")
// }


// let age=12;
// if(age>=13){
//     console.log("you can vote")
// }
// else{
//     console.log("you cannot vote")
// }

// let size="t";
// if(size==="xl"){
//     console.log("Price of popcron is Rs.250");
// }else if(size==="l"){
//     console.log("Price of popcron is Rs.200");
// }else if(size==="m"){
//     console.log("Price of popcron is Rs.100");
// }else if(size==="s"){
//     console.log("Price of popcron is Rs.50");
// }else{
//     console.log("Not Found in less price is popcron")
// }

// let marks=35;
// if(marks>=33){
//     console.log("pass");
//     if(marks>=80){
//         console.log("Grade is :A");
//     }else{
//         console.log("Grade is :Fail");
//     }
// }else{
//     console.log("better luck next time");
// }

// let marks=90;
// if (marks>=33 && marks>= 80) {
//     console.log("pass");
//     console.log("A+");
// }
// Practice question 1
// let str="apple";
// if((str[0]==='a') && (str.length > 3)){
//     console.log("Good string")
// }
// else{
//     console.log("Not good string")
// }

// // Practice question 2

// let num=12;
// if((num % 3 === 0) && ( (num+1==15) || (num-1==11))){
//     console.log("Safe");
// }
// else{
//     console.log("unSafe");
// }


// if(" "){
//     console.log("It is true value");
// }
// else{
//     console.log("It is false value");
// }

// let color="green";
// switch(color) {
//     case  "red":
//     console.log("Stop");
//     break;

//     case  "yellow":
//     console.log("slow down");
//     break;


//     case  "green":
//     console.log("Go");
//     break;

//     default :
//     console.log("light is broken")

// }

// let day=3;
// switch(day){
//     case 1:
//     console.log("monady");
//     break;

//     case 2:
//     console.log("tuesday");
//     break;

//     case 3:
//     console.log("wednesday");
//     break;

//     case 4:
//     console.log("thursday");
//     break;

//     case 5:
//     console.log("friday");
//     break;

//     case 6:
//     console.log("saturday");
//     break;

//     case 7:
//     console.log("sunday");
//     break;

//     default:
//         console.log("Not a day")
// }

// alert("something is wrong");
// console.log("this is simple error");
// console.error("this is simple error");
// console.log("this is simple error");


// let firstName= prompt("Enter your first name");
// let lastName= prompt("Enter your last name");
// let msg= "Welcome"+ " " + firstName  + " " + lastName + " "+ "!";
// alert(msg);

// let num=30;

// if(num%10==0){
//     console.log("Good");
// }
// else{
//     console.log("bad");
// }

// let name= prompt("Enter your name");
// let age= prompt("Enter your age");
// alert(`${name} is $ {age} years old.`);

// let quarter=4
// switch(quarter){
//     case 1:
//         console.log("january, Febuaray, March");
//         break;

//         case 2:
//         console.log("April, May, June");
//         break;

//         case 3:
//         console.log("July, August, September");
//         break;

//         case 4:
//         console.log("October, november, December");
//         break;
// }

// let str="apple";
// if((str[0] =='a' || str[0]== 'A')&& (str.length > 5)){
//     console.log("golden String");
// }
// else{
//     console.log("not a golden string");
// }

// let msg="    ritik   ";
// let newMsg= msg.trim();
// console.log(newMsg);
// newMsg= newMsg.toUpperCase();
// console.log(newMsg);


// let msg="       ritikdubey";
// let newMsg=msg.trim().toUpperCase();
// console.log(newMsg);

// let msg="ritikdubey";
// console.log(msg.slice(0,7))

// let call="apnacollege";
// console.log(call.slice(4,11))

// let msg="ilovecoding";

// let student1="Ritik";
// let student2="Dubey";
// let student3="Bunty";

// let students=["Ritik","Dubey","Bunty"];

// let cars=["audi", "bmw", "xuv", "maruti"];

// let n=prompt("Enter your number");
// n=parseInt(n);

// for(let i=n; i<=n; i=i+n){
//     console.log(i);
// }

// for(let i=1;i<=4;i++){
//     console.log(`outer loop ${i}`);
//         for(let j=1;j<=4;j++){
//             console.log(j);
//         }
    
// }

// let pattern=prompt("Enter the number");
// pattern=parseInt(pattern);
// let i,j,k,l;
// for(let i=1;i<=5;i++){

//     for(let k=1; k<=5-i;k++){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(let j=1;j<=i;j++){
//         document.write("*");
//     }
//     for(let l=2;l<=i;l++){
//         document.write("*");
//     }
//     document.write("</br>")
// }

// const favMovie="avatar";

// let guess=prompt("Guess my favorite movie");

// while((guess!=favMovie)&& (guess!="guess")){
//     console.log("wrong guess.please try again");
// }
// if(guess==favMovie){
//     console.log("congrates!!");
// }
// else{
//     console.log("you quite");
// }

// let i=1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// const favMovie="avatar";

// let guess=prompt("Guess my favorite movie");

// while(guess!=favMovie){
//     if(guess!="guess"){
//         console.log("you quite");
//         break;
//     }

//     console.log("wrong guess.please try again");
// }
// if(guess==favMovie){
//     console.log("congrates!!");
// }

// let fruits=["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple")
// for(let i=0; i<fruits.length;i++){
//     console.log(i,fruits[i])
// }


// let fruits=["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);


// }

// let heroes=[
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder women", "flash"]
// ]
// for(let i=0; i<heroes.length; i++){
//     console.log( i,heroes[i]);
// }

// let heroes=[
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder women", "flash"]
// ]
// for(let i=0; i<heroes.length; i++){
//     console.log( i,heroes[i], heroes[i].length);

//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
    
        
   
// }


// let names=[
//     ["ritik", "rohit", "zibran", "amod", "chandan","rahul"],
//     ["ritika", "saloni", "sakshi", "suhanai", "chandani"]
// ]
// for(let i=0; i<names.length; i++){
//     console.log(i,names[i], names[i].length);

//     for(let j=0; j<names[i].length;j++){
//         console.log(`j=${j}, ${names[i][j]}`);
//     }
// }

// let fruits=["mango", "appple", "banana", "litchi", "orange", "papaya"];
// for(ritik of fruits){
//     console.log(ritik);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

let names=[
       ["ritik", "rohit", "zibran", "amod", "chandan","rahul"],
         ["ritika", "saloni", "sakshi", "suhanai", "chandani"]]
for(list of names){
    for(name of list){
        console.log(name);
    }
}