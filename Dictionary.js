/*实现字典 功能  */
function dictionary(){
	this.datastore=new Array();
    this.add=add;
    this.remove=remove;
    this.showAll=showAll;
    this.find=find;
    this.clear=clear;
    this.count=count;
}
function add(key, value){
	this.datastore[key]=value;
}
function find(key){
	return this.datastore[key];
}
function remove(key){
	 delete this.datastore[key];
}
function showAll() {
for each (var key in Object.keys(this.datastore)) {
	var   obj=this.datastore[key];
	 
print(key + " -> " +this.datastore[key]);
}
}
function  count(){
	var   num=0;
	for(var key in Object.keys(this.datastore)){
		num++
	}
	return num;
}

function clear(){
	for each (var key in Object.keys(this.datastore)){
		delete this.datastore[key];
	}
}
var pbook=new dictionary();
pbook.add("Mike","124");
pbook.add("David","347");
pbook.add("Dav","47");
pbook.add("BBid","3");
print("David's extension "+ pbook.find("David"));
pbook.remove("David");
pbook.showAll();

print("the number of the map is " + pbook.count());
 pbook.clear();
print(" after clean ,the number of the map is " + pbook.count());

var  counter =new dictionary();
var words=read("counter.js").split(" ");
if(words.length>0){
	print(" file load success!\n");
}
for each( var word in words ) 
	{   
		if(Number.isInteger(counter.find(word))){ 
			counter.add(word,counter.find(word)+1);
		}
		 else{
		 	counter.add(word,1);
		 }
	}		 
print(counter.showAll());




