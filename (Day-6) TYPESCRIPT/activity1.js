var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.display = function () {
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
    };
    return User;
}());
var username = prompt("Enter username:") || "";
var password = prompt("Enter password:") || "";
var user = new User(username, password);
user.display();
