// Create a program to define a class as user with attributes as user and password and two method and take a input user name and password and Then display the output as username and password typescript easy code
class User {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    display(): void {
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
    }
}

let username = prompt("Enter username:") || "";
let password = prompt("Enter password:") || "";

let user = new User(username, password);

user.display();