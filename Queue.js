function Queue(){
	this.dataStore=[];
	this.enqueue=enqueue;
	this.dequeue=dequeue;
	this.front=front;
	this.back=back;
	this.toString=toString;
	this.empty=empty;
	this.count=count;
}
function count (){
	return this.dataStore.length;
}
function enqueue(element){
		this.dataStore.push(element);
}
/* shift 方法  删除队头元素*/
function dequeue(){
	this.dataStore.shift();
}
function front(){
	return this.dataStore[0];
}
function back(){
	 return this.dataStore[this.dataStore.length-1];
}
function toString( ) {
	 var retStr='';
	 for (var i = this.dataStore.length-1 ; i >= 0; i--) {
	 	retStr+= this.dataStore[i]+"\n";
	 }
	 return retStr;
}
function empty(){
		return this.dataStore.length==0?true:false;
}
var q=new Queue();
q.enqueue("ABC");
q.enqueue("BCD");
q.enqueue("DEF");
q.enqueue("EFG");
q.enqueue("FGI");
q.dequeue();
print(q.toString());
print(" the head of the queue is "+q.front());
print(" the rear of the queue is "+q.back());
print(q.empty());
/*

用 js 数组实现不同点数据结构其实就是对
  shift     从数组头删除一个并且唯一的一个 元素
  unshift   向数组的头插入一个或多个元素
  pop 	    返回并删除数组中的最后一个元素	
  push      向数组的结尾添加一个或者多个元素   
  slice     返回一个子数组 
  splice    插入 删除 数组中的 多个元素 
 */
function Dancer(name,sex){
	this.name=name;
	this.sex=sex;

}
function getDancers(males,females){
   var names=read("Dancer").split("\n");
   	for (var index = names.length - 1; index >= 0; index--) {
   		names[index]=names[index].trim();
   	}
   	for (var index = names.length - 1; index >= 0; index--) {
   		var dancers=names[index].split(" ");
   		var sex=dancers[0];
   		var name=dancers[1];
   		sex=="F"?females.enqueue(new Dancer(name,sex)):males.enqueue(new Dancer(name,sex));
   	}
}
		
function dance(males,females){
	print(" the dance partners are: \n");
	 while(!females.empty()&&!males.empty()){
	   
	   print(" female dancer is "+females.front().name);
	   females.dequeue();
	   print(" and male dancer is "+ males.front().name);
	    males.dequeue();
		}
	print();
	}

	var   maleDancers=new Queue();
	var  femaleDancers =new Queue();
	getDancers(maleDancers,femaleDancers);
	print(femaleDancers.count());
	dance(maleDancers,femaleDancers);

/*function distribute(nums,queues,n,digit){
		for (var i = n; i >= 0; i--) {
				if(digit==1){
           queues[nums[i]%10].enqueue(nums[i]);
				}
		else{
			//queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
			queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
				}
			//(digit==1)?queues[nums[i]%10].enqueue()nums([i]):queues[Math.floor(nums[i])/10].enqueue(nums[i]);
			}
		}
function collect(queues,nums){
   var i=0;
   for(var digit=0;digit<10;++digit){
   		while(!queues[digit].empty()){
   			nums[++i]=queues[digit].dequeue();
   		}
   }
}
    function dispArray(arr){
	   for (var i = arr.length - 1; i >= 0; i--) {
		   print(arr[i]+" ");
	   }
     }
 var queues=[];
for (var i = 10; i >= 0; i--){
	queues[i]=new Queue();
}
var nums=[];
for (var i = 10; i >= 0; i--) {
nums[i]=Math.floor(Math.floor(Math.random()*101));
}
print("before sort");
dispArray(nums);
distribute(nums,queues,10,1);
collect(queues,nums);
distribute(nums,queues,10,10);
print("after radix sort: ");
dispArray(nums);*/
function Patient(name,code){
	this.name=name;
	this.code=code;
}
function dequeue(){
	var priority=this.dataStore[0].code;
	for(var index=0;index<this.dataStore.length;++index){
		if(this.dataStore[index].code<priority){
			priority=1;
		}
	}
	return this.dataStore.splice(priority,1);
}
function toString(){
	var retStr="";
	for(var index=0;index<this.dataStore.length;++index){
		retStr+= this.dataStore[index].name+" code : "+this.dataStore[index].code+" \n";
	}
	return retStr;
}
  var p=new Patient("Smith",5);
  var ed=new Queue();
  ed.enqueue(p);
  
  p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p=new Patient("Jones",7);
  ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name+" "+seen[0].code);
print("Patients waiting to be seen: ")
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name+" "+seen[0].code);
print("Patients waiting to be seen: ")
print(ed.toString());
