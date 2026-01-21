//map -is a data structure used to store the data in key and value pair just like hashmap or Map we use in collection in java

//define the type of map for type safety eg of a student you want to store name as a value and rollno as a key
let userMap = new Map<number,string>();
userMap.set(101,"Niti");
userMap.set(102,"Nitin");
userMap.set(103,"Jatin");
console.log(userMap.get(101));
let items = ["laptop","mouse","keyboard"];
for(let item of items){
    console.log("The value " , item);
}
interface users{
id:number;
name:string;
salary:number;
}
let userData : users={
id:101,
name:"Niti",
salary:54545,
}
// react props , state management 

interface Animal {
  name: string;
  sound(): void;
}
class Dog implements Animal {
  constructor(public name: string) {}
  sound() {
    console.log(`${this.name} says: Woof!`);
  }
}
let obj = new Dog("dfdf");
obj.sound();