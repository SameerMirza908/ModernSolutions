//ways to print in js.
//console.log("Hello world");
//document.write("Chal naaa");
//  alert("");
//console api.
//console.error("This is an error");
//console.warn("Rukjaa bhai");

var num1 = 47;
var num2 = 34;
var str = "This is your marks";
//console.log("Answer"+num1+num2);

var marks = {
    talha: 0.1234,
    sameer: 100,
    sufiyaan: 48
}

//console.log(str,marks);

var und;
//console.log(und);

var array = [40, "Sameer", '70', 4, 9,];

//console.log(array[1]);

var a = 90;
var b = 89;

//console.log(a != b);

var arr = [4, 87, 34, 98];
//console.log(arr.pop());
let m = "Mirza Sameer";
let d = "Baig";
//console.log(m.concat(m,d));
arr.forEach(function (element) {

    //console.log(element);

})

function swap(a, b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}

var a = 4;
var b = 3;

//swap(a, b);

let elem = document.getElementById('click');
//console.log(elem);


//console.log(elemclass);

let elemclass = document.getElementsByClassName('container');

elemclass[1].classList.add('text-success');

//console.log(elemclass[0].innerHTML);
//console.log(elemclass[0].innerText);

//console.log(elemclass[1].innerHTML);
//console.log(elemclass[1].innerText);


let e = document.getElementsByTagName('div');
//console.log(e);

let x = document.getElementsByTagName('button');
//console.log(x);

create = document.createElement('p');
create.innerText = "this is created para";
e[0].appendChild(create);

creatnew = document.createElement('b');
creatnew.innerText = "This is created para";
e[0].replaceChild(creatnew, create);


button = document.createElement('button');
button.innerText = "Click me please naa";
e[1].appendChild(button);

sel = document.querySelector('.container');

console.log(sel);

sel = document.querySelectorAll('.container');

//console.log(s

//click.addEventListener('click',function(){

// console.log("Button was clicked");

//})

doc = document.getElementById('click')

doc.addEventListener('click', function () {

    //console.log("Button was clicked");
})

button.addEventListener('click', function () {

    //console.log("Button 2 was clicked");

})

doc1 = document.getElementsByTagName('div');

let pre = document.querySelectorAll('.container')[1].innerHTML;

doc1[0].addEventListener('mouseup', function () {

    document.querySelectorAll('.container')[1].innerHTML = pre;

    //console.log("container 1 is droped");

})

doc1[0].addEventListener('mousedown', function () {

    document.querySelectorAll('.container')[1].innerHTML = "<b> container is clicked </b>";


    //console.log("container 1 is clicked ");

})

doc = document.getElementById('click')

function print() {


    elemclass[0].classList.add('bg-primary');

    // console.log("hello");
}


function print2() {

    elemclass[0].classList.add('text-sucess');
}

//setTimeout(print,print2,4000);



//setInterval(print,print2,3000);

//clearInterval(t);






