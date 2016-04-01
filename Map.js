/* Map 的 实现*/
function HashTable(){
	this.table=new Array(137);
	this.simpleHash=simpleHash;
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
		//print(total+"  is total");
	}
	return total % this.table.length;
}

function put (data){
	var pos=this.simpleHash(data);
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