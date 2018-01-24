// addUsers(id,name,room)
// removeUser(id)
// getUser(id)
// getUserList(room)


class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }
}

module.exports = { Users }; 

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDetail(){
//         return `${this.name} is ${this.age} years old.`;
//     }
// }

// var me = new Person('swapnil', 25);
// var det = me.getUserDetail();
// console.log(det);
