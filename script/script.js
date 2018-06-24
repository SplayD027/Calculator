/* Global Variable */
let a = 0,b = 0;
let display = document.getElementsByClassName('display')[0];
let oper = document.querySelector('.operator');
let numpad = Array.from(document.querySelectorAll('.numbers button'));
let zero = document.getElementsByClassName('zero')[0];
let clearbutton = document.querySelector('.clear');
let equal = document.querySelector('.equal');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiple = document.querySelector('.multiple');
let divide = document.querySelector('.divide');
let decimal = document.querySelector('.decimal');
let back = document.querySelector('.backspace');

/* Actions */
numpad.forEach(num=>{num.addEventListener('click',()=>{Numpad(num.textContent)})});
zero.addEventListener('click',()=>{Numpad(zero.textContent)});
clearbutton.addEventListener('click',()=>{Clear()});
equal.addEventListener('click',()=>{Equal()});
plus.addEventListener('click',()=>{Operators('+')});
minus.addEventListener('click',()=>{Operators('-')});
multiple.addEventListener('click',()=>{Operators('*')});
divide.addEventListener('click',()=>{Operators('/')});
back.addEventListener('click',()=>{Backspace()});
decimal.addEventListener('click',()=>{Decimal()});
window.addEventListener('keydown',(e)=>{Keyboard(e.key)});

function Display(input){
	display.textContent = input;
}
function Numpad(num){
	if(display.textContent.length==20)return;
	a = String(a);
	if(a[0]==0){
		if(a.search(/\./)!=-1)a += num;
		else a = num;
	}
	else a += num;
	Display(a);
}
function Operators(input){
	if(a==0)return;
	b = a,a = 0;
	if(input=='+')oper.textContent = '+';
	if(input=='-')oper.textContent = '-';
	if(input=='*')oper.textContent = '*';
	if(input=='/')oper.textContent = '/';
	Display(a);
}
function Equal(){
	if(oper.textContent=='=')return;
	if(oper.textContent=='+')a = Number(a)+Number(b);
	if(oper.textContent=='-')a = Number(b)-Number(a);
	if(oper.textContent=='*')a = Number(a)*Number(b);
	if(oper.textContent=='/')a = Number(b)/Number(a);
	oper.textContent = '=';
	Display(a);
}
function Clear(){
	a = 0,b = 0;
	display.textContent = a;
	oper.textContent = '=';
}
function Decimal(){
	a = String(a);
	if(a.length==19)return;
	if(a.search(/\./)!=-1)return;
	a += '.';
	Display(a);
}
function Backspace(){
	a = String(a);
	if(a.length==1)a=0;
	else a = a.substr(0,a.length-1);
	Display(a);
}
function Keyboard(key){
	console.log(key);
	switch(key){
		case 'Backspace':
		case 'Delete':
			Backspace();
			break;
		case 'Enter':
			Equal();
			break;
		case 'C':
		case 'c':
			Clear();
			break;
		case ".":
			Decimal();
			break;
		case '+':
		case '-':
		case '*':
		case '/':
			Operators(key);
			break;
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":	
			Numpad(key);
	}
}