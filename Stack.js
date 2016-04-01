/*栈操作
基于  peek() pop()*/
function Stack(argument) {
	// body...
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
	this.clear = clear;
	this.isEmpty = isEmpty;
}
/*判断空*/
function isEmpty() {
	return (this.top == 0) ? true : false;
}

function top() {
	return this.top;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	/* 返回栈顶元素   top-1？？*/
	return this.dataStore[this.top - 1];
}

function length() {

	return this.top;
}

function clear() {
	this.top = 0;
	delete this.dataStore;
	dataStore = [];
}
/*简单测试*/
var s = new Stack();
s.push("abc");
s.push("def");
s.push(" ijk");
print("length :" + s.length());
var popped = s.pop();
print(" the popped element is " + popped);
print(s.peek());
print("length :" + s.length());

/*站功能实现 转换2到⑨进制的数字
(1) 最高位为 n % b，将此位压入栈。
(2) 使用 n/b 代替 n。
(3) 重复步骤 1 和 2，直到 n 等于 0，且没有余数。
(4) 持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符
串形式。*/
function mulBase(num, base) {
	var s = new Stack();
	while (num > 0) {
		var high = num % base;
		s.push(high);
		num = Math.floor(num / base);
	}
	while (!s.isEmpty()) {
		print(s.pop());
	}
}

mulBase(125, 8);
/* 站功能实现  回文数判断*/
function isPalindrome(word) {
	var s = new Stack();
	for (var index = 0; index < word.length; index++) {
		s.push(word[index]);
	}
	var test = "";
	while (!s.isEmpty()) {
		test = test + s.pop();
	}
	print((test == word) ? true : false);
}
isPalindrome("aba");
/*递归演示  计算阶乘*/
function factiorial(num) {
	if (num == 0) {
		return 1;
	} else {
		return num * factiorial(num - 1);
	}
}
print(" the answer is " + factiorial(5));

function match(word) {
	var s = new Stack();
	s.push(word[0]);
	for (var index = 1; index < word.length; index++) {
		if (word[index] == "]" && s.peek() == "[" || word[index] == ")" && s.peek() == "(") {
			s.pop();
		} else {
			s.push(word[index]);
		}
	}
	return s.isEmpty();
}
print(match("[([][])]"));