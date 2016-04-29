/* Map 的 实现*/
function HashTable(){
	this.table=new Array(137);
	this.simpleHash=simpleHash;
	this.betterHash=betterHash;
	this.showDistro=showDistro;
	this.put=put;
	//this.get=get;
}

/* 散列值是 ASCII 码 的值除以数组长度的余数*/
function simpleHash(data){
	var total =0;
	for(var index=0;index<data.length;++index)
	{
		total+=data.charCodeAt(index);
		
	} print(total+"  is total " + index);
	return total % this.table.length;
}
/* 更好的hash function*/
function betterHash(string){
	const H=37;
	var total=0;
	for (var i = string.length - 1; i >= 0; i--) {
		 total+=H* total+string.charCodeAt(i);
	}
	total=total%this.table.length;
	if(total<0){
		total+=this.table.length-1;
	}
	return parseInt(total);
}
 /* 修改 put 方法  不但接受建而且接受参数*/
 
function put (key,data){
	var pos=this.betterHash(key);
	this.table[pos]=data;
}
function showDistro(){
	var num=0;
	for(var index=0;index<this.table.length;index++){
		if(this.table[index]!=undefined){
			print(index+" : "+ this.table[index]);
		}
	}
} 
	var someNames=["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
 
var hTable=new HashTable();
for(var index=0;index<someNames.length;index++)
	{
	hTable.put(someNames[index]);
	}
 
hTable.showDistro();
function getRandomInt(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}
function genStundetData(arr){
    for(var index=0;index<arr.length;index++){
    	var num="";
    	for(var j=1;j<=9;j++){
    		num+=Math.floor(Math.random()*10);	
    	}
    	num+=getRandomInt(50,100);
    	arr[index]=num;
    }
}

var numStudents=10;
var arrSize=97;
var idLen=9;
var students=new Array(numStudents);
genStundetData(students);
print("Student data:\n");
for (var i = 0; i <students.length; i++) {
	print(students[i].substring(0,8)+' '+ students[i].substring(9));
}
print(" \n\n Data distribution:\n");
var hTable2=new HashTable();
for (var i=0; i<students.length;++i) {
  hTable2.put(students[i],getRandomInt(50,100));
}

hTable2.showDistro();
 