load("Map.js")
var pbook=new dictionary();
pbook.add("Mike","124");
pbook.add("David","347");
pbook.add("Dav","47");
pbook.add("BBid","3");
print("David's extension "+ pbook.find("David"));
pbook.remove("David");
pbook.showAll();