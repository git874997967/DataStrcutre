/*集合的应用*/
/* 数组的 splice(m,n,o)  从 当前的m位置截取n个字符 删掉 用 o来代替
用法灵活可以增加元素到指定位置  也可删除指定位置 或替换指定位置的元素
shift  返回并且删除第一个元素
unshift
*/
function Set(){
	this.dataStore=[];
	this.add=add;
	this.remove=remove;
	this.size=size;
	this.union=union;
	this.interect=interect;
	this.subset=subset;
	this.difference=difference;
	this.show=show;
};

function add(data){
	if(this.dataStore.indexOf(data)<0){
		this.dataStore.push(data);
		this.dataStore.sort();
		return true;
	}
	else return false;
}
function remove(data){
	var pos=this.dataStore.indexOf(data);
	if(pos<0){
		return false;
	}
	else{
		this.dataStore.splice(pos,1);
		return true;
	}
}
function show(){
	return this.dataStore;
}
 var names=new Set();
 names.add("abc");
 names.add("cvbc");
 names.add("acvbc");
 names.add("abrec");
 names.add("cnbbc");
if(names.add("abccbcb")){
	print("new element added");
}
else{
	print("alerady in the set");
}
names.add("cvbcvb");
print(names.show());
if(names.remove("ccb")){
	print("one element removed");
}
else{
	print("can not be removed");
}
function contains(data){
		return(this.dataStore.indexOf(data)>-1)?true:false;
}

function size(){
	return this.dataStore.length;
}
function union(set){
	var tempSet=new Set();
	for (var i = this.dataStore.length - 1; i >= 0; i--) {
		tempSet.add(this.dataStore[i]);
	}
	for (var i = set.dataStore.length - 1; i >= 0; i--) {
		if(!tempSet.contains(Set.dataStore[i])){
				tempSet.add(Set.dataStore[i]);
		}
	}
	return tempSet;
 
}
function interect(set){
	var tempSet =new Set();
	for (var i = this.dataStore.length - 1; i >= 0; i--) {
		if(set.contains(this.dataStore[i])){
				tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
}
function subset(){
	return;
	}

function difference(set){
	var tempSet=new Set();
	for (var i = this.dataStore.length - 1; i >= 0; i--) {
		if(!set.containthis(this.dataStore[i])){
			tempSet.add(this.dataStore[i]);
		}
	}
	return tempSet;
	}

	function higer(data){
		var index =this.dataStore.indexOf(data);
		if(index<0){
			this.add(data);
		}
		return this.dataStore.indexOf(data)+1;
	}
	function lower(data){
		var index =this.dataStore.indexOf(data);
		if(index<0){
			this.add(data);
		}
		return this.dataStore.indexOf(data)-1;

	}