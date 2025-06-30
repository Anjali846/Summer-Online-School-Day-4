//3.User Greeting (Conditinal Statement)

let userName = prompt("Enter your name");
let userage = prompt("Enter your age");
userage = Number(userage);

if(userage < 18){
    alert(`Hey ${userName},you are a teen!`);
}
else if(userage >= 18 && userage <= 60){
    alert(`Hey ${userName},you are an adult!`);
}else{
    alert(`Hey ${userName},you are a senior citizen!`);
}
