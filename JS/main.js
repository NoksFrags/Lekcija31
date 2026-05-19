// Do while loop

var i = 0;
do{
    i = i + 1;
    console.log(i);
}while(i < 5);

console.log("-----------------------");

// While loop

var j = 0;
while(j < 5){
    j = j + 1;
    console.log(j);
}

console.log("-----------------------");

let n = 0;
let x = 0;
while(n < 3){
    n++;
    x += n;
    console.log(n);
    console.log(x);
}

console.log("-----------------------");

// for loop

for(var i = 0; i < 5; i++){
    console.log("Value of i is: " +i);
}

console.log("-----------------------");

// for/in

var person = {firstName: "John", lastName: "Doe", age: 25};

var text = '';
var z;

for(z in person){
    text += person[z];
}

console.log(text);

console.log("-----------------------");

// for/of

var names = ['Steve','Bill','Mark'];

var y;

for(y of names){
    console.log(y);
}

console.log("-----------------------");

var txt = "Javascript";

var l;

for(l of txt){
    console.log(l);
}