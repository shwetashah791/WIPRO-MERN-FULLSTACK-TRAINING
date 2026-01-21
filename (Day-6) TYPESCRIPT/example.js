//map -is a data structure used to store the data in key and value pair just like hashmap or Map we use in collection in java
//define the type of map for type safety eg of a student you want to store name as a value and rollno as a key
var userMap = new Map();
userMap.set(101, "Niti");
userMap.set(102, "Nitin");
userMap.set(103, "Jatin");
console.log(userMap.get(101));
var items = ["laptop", "mouse", "keyboard"];
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    console.log("The value ", item);
}
var userData = {
    id: 101,
    name: "Niti",
    salary: 54545,
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, " says: Woof!"));
    };
    return Dog;
}());
var obj = new Dog("dfdf");
obj.sound();
