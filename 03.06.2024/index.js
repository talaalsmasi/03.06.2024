// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
let x = 15;
let y = 5;
if (x>10 && y>10){
    console.log("both numbers greater than 10");
}
else{
    console.log ("At least one number is not greater than 10");
}



// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
let username = true ;
let password = true ;
if( username = true || password == true ){
    console.log("Access granted");
}
else{
  console.log("Access denied");
}



// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
var  a = 15;
if ( 10<a<15){
    console.log("The number is between 10 and 20");
}
else{
    console.log("The number is not between 10 and 20");
}



// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
 let age = 22;
 license = true ;
 if (age >= 18 && license == true){
    console.log("You can drive");
 }
 else{
    console.log("You cannot drive");
 }





// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
let b = 20;
if (b>=10 || b<0){
    console.log("Invalid number");
}
else{
    console.log("Valid number");
}



// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".
let r=50;
if (5<r<10 || 20<r<25 ){
    console.log("The number is valid");
}
else{
    console.log("The number is not valid");
}



// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".
password="secret";
if (password=="secret"){
    console.log("Access granted");
}
else{console.log("Access denied");

}



// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
let n = 5;
if (n > 0 && n < 100 && n % 2 == 0) {
  console.log("The number is even and between 0 and 100");
} else {
  console.log("The number is not even and/or not between 0 and 100");
}



// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
let s = 5;
let t = -10;

if (s > 0 || t > 0) {
  console.log("At least one number is negative");
} else {
  console.log("Both numbers are positive");
}



// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
let age2 = prompt("Please enter your age");
let student = prompt("are you a student? yes or no ");

if (age2 < 18 || student === "yes") {
  console.log("You qualify for a discount");
} else {
  console.log("You do not qualify for a discount");
}