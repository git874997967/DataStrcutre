List=function(){
	this.listSize=0;
	this.pos=0;
	this.dataStore=[];
	this.clear=clear;
	this.find=find;
	this.toString=toString;
	this.insert=insert;
	this.append=append;
	this.remove=remove;
	this.front=front;
	this.end=end;
	this.prev=prev;
	this.next=next;
	this.length=length;
	this.currPos=currPos;
	this.moveTo=moveTo;
	this.getElement=getElement;
	this.contains=contains;
}
function append(element){
		this.dataStore[this.listSize++]=element;
}
function find(element){
		for (var i = this.dataStore.length - 1; i >= 0; i--) {
				if(this.dataStore[i]==element){
					return i;
				}
		}
		return -1;
}
function remove(element){
		var foundAt=this.find(element);
		if(foundAt>-1){
			this.dataStore.splice(foundAt,1);
			--this.listSize;
			return true;
		}
		return false;
}
function length(){
	return this.listSize;
}
function toString(){
	return this.dataStore;
}
//简单测试

function insert(element,after){
	var insertPos=this.find(after);
	if(insertPos>-1){
		this.dataStore.splice(insertPos+1,0,element);
		++this.listSize;
		return true;
	}
	return false;
}
function clear(){
	delete this.dataStore;
	this.listSize=this.pos=0;
	this.dataStore=[];
}
function contains(element){
	for (var i = this.dataStore.length - 1; i >= 0; i--) {
		if(this.dataStore[i]==element){
			return true;
		}
	}
	return false;
}
function front(){
	this.pos=0;
}
function end(){
	this.pos=this.listSize-1;
}
function prev(){
	if(this.pos>0){
		--this.pos;
	}
}
function next(){
	if(this.pos<=this.listSize){
		++this.pos;
	}
}
function currPos(){
	return this.pos;
}

 function moveTo(position){
	this.pos=position;
 }
 function getElement(){
 	return this.dataStore[this.pos];
 }
 var names=new List();
names.append("ABC");
names.append("DEF");
names.append("GHI");
 
print(names.toString());
for(names.front();names.currPos()<names.length();names.next()){
	 
	print(names.getElement());
}
