require('../../css/common.css');
require('../../css/a.css');

var Comp1 = require('../components/comp1.js');

console.log('我是页面A, 我开始调用了组件Comp1了');
class A{
	constructor(){
		console.log("cons");
	}

	x(){
		console.log("xxx");
	}
}
const a=new A();
a.x();


Comp1();