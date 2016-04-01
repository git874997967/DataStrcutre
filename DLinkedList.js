/* 双向链表*/
function Node(element){
	this.number++;
   this.element=element;
   this.next=null;
   this.previous=null;
}
function DLList(){
	this.head=new Node("head");
	this.head.next=this.head;
	this.insert=insert;
	this.findLast=findLast;
	this.find=find;
	this.remove=remove;
	this.dispReverse=dispReverse;
	this.display=display;
	this.advance=advance
	this.show=this.show;
	this.back=this.back;
}
function advance(n){
 	for(var index=0;index<n;index++){
 		currNode=currNode.previous;
 	}
 	return currNode;
}
function show(){
     print(currNode.element);
     return currNode;
}
function back(n){

	for(var index=0;index<n;index++){
 		currNode=currNode.next;
 	}
 	return currNode;

}
function display() {
var currNode = this.head;
while (!(currNode.next == null)&&(currNode.next.element!="head")) {
print(currNode.next.element);
currNode = currNode.next;
}
return currNode;
}
function insert(newElement,item){
	var newNode=new Node(newElement);
	var current=this.find(item);
	newNode.previous=current;
	current.next=newNode;
    return current;
}
function find(item) {
var currNode = this.head;
while (currNode.element != item) {
currNode = currNode.next;
}
return currNode;
}
function remove(item){
	var currNode=this.find(item);
	if(currNode.next!=null){
		currNode.previous.next=currNode.next;
		var save=currNode.next;
		currNode.next.previous=currNode.previous;
		 
		currNode.next=null;
		currNode.previous=null;
	}
		 return save;
}
function findLast(){
	var currNode=this.head;
	while(currNode.next!=null){
		currNode=currNode.next;
	}
		return currNode;
}
function dispReverse(){
	var currNode=this.head;
	currNode=this.findLast();
	while(currNode.previous!=null){
		print(currNode.previous.element);

		currNode=currNode.previous;
	}
	return currNode;
}
var cities = new DLList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Carlisle");
cities.display();
cities.dispReverse();
  
 
 
