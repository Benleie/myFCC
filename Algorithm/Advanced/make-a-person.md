+ for...in会遍历原型链上的属性；
+ Object.keys()返回一个自身可枚举属性的数组


使用原型链的写法，only未满足Object.keys()的要求。
```javascript
var Person = function(firstAndLast) {
	var name = firstAndLast.split(" ");
	this.first = name[0];
	this.last = name[1];
	this.fullName = firstAndLast;
};
Person.prototype.getFullName = function(){
	return this.fullName;
}
Person.prototype.getFirstName = function(){
	return this.first;
}
Person.prototype.getLastName = function(){
	return this.last;
}
Person.prototype.setFullName = function(firstAndLast){
	var name = firstAndLast.split(" ");
	this.first = name[0];
	this.last = name[1];
	this.fullName = firstAndLast;
}
Person.prototype.setFirstName = function(first){
	 this.first = first;
	 this.fullName = this.first + ' ' + this.last;
}
Person.prototype.setLastName = function(last){
	 this.last = last;
	 this.fullName = this.first + ' ' + this.last;
}
```


参考大考1958的Construcor创建对象写法；
return 的值好像可有可无可任意；
当然，也可以去掉fullName这个变量；
```js
function Person(firstAndLast){
	var names = firstAndLast.split(' '),
		firstName = names[0],
		lastName = names[1],
		fullName = firstAndLast;

	this.getFirstName = function(){
		return firstName;
	};
	this.getLastName = function(){
		return lastName;
	};
	this.getFullName = function(){
		return fullName;
	};
	this.setFullName = function(firstAndLast){
		var names = firstAndLast.split(' ');
		firstName = names[0];
		lastName = names[1];
		fullName = firstAndLast;
	};
	this.setFirstName = function(first){
		firstName = first;
		fullName = firstName + ' ' + lastName;
	};
	this.setLastName = function(last){
		lastName = last;
		fullName = firstName + ' ' + lastName;
	};

}
```