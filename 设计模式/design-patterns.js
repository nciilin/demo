# 常见设计模式

// 构造函数模式

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function() {
	return this.name;
}

var student = new Person("vicnet", 22);

// 混合模式

var Person = function(name, age) {
	this.name = name;
	this.age = age;
} 

Person.prototype.sayName = function() {
	console.log(this.name);
};

var Student = function(name, age, score) {
	Person.call(this, name, age);
	console.log(this.score);
}

Student.prototype = create(Person.prototype);
function create(parentObj) {
	function F(){};
	F.prototype = parentObj;
	return F();
};

Student.prototype.sayScore = function() {
	console.log(this.score);
}

var student = new Student("vincent", 22, 33);


// 模块模式

var Person = (function(){
	var name = "vincent";
	function sayName() {
		console.log(name);
	}; 
	return {
		name: name,
		sayName: sayName
	}
})()


// 工厂模式

function createPerson(name) {
	var person = {
		name: name,
		sayName: function() {
		    console.log(this.name);
		} 
	};
	return person;
};
createPerson('vincent');

// 单例模式

var People = (function(){
	var instance;
	function init(name) {
		return {
			name: name
		};
	}// 词法作用域
	return {
		createPeople: function(name) {
			if (!instance) {
				instance = init(name);
			}
			return instance;
		}
	};
})();
People.createPeople("vincent");

// 发布订阅模式

var EventCenter = (function() {
	var events = {};
	function on(evt, handler) {
		events[evt] = events[evt] || [];
		events[evt].push({
			handler: handler
		})
	}

	function fire(evt, args) {
		if(!events[evt]) {
			return;
		}
		for(var i= 0; i < events[evt].length; i++) {
			events[evt][i].handler(args);
		}
	}

	function off(evt) {
		delete events[evt];
	}

	return {
		on: on,
		fire: fire,
		off: off
	}
})()


// 使用发布订阅模式写一个事件管理器，可以实现如下方式调用

var Event = (function() {
	var events = {};

	function on(evt, handler) {
		events[evt] = events[evt] || [];
		events[evt].push({
			handler: handler
		})
	}

	function fire(evt, args) {
		if(!events[evt]){
			return;
		}
		for(var i = 0; i < events[evt].length; i++ ) {
			events[evt][i].handler(args);
		}
	}

	function off(evt) {
		delete events[evt];
	}

	return {
		on: on,
		fire: fire,
		off: off
	}
})()

Event.on("change", function(val){
	console.log("change... now val is " + val );
});

Event.fire("change", "饥人谷");
Event.off("change")