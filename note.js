const { Console } = require("console");

const user = {
    firstName: 'jerald',
    lastName: 'tagadtad',
    age: 30,
    fullname() {
        return `${this.firstName} ${this.lastName}`
    }
}

// console.log(user.fullname());

// const newUser = {...user, firstName: 'timmy'};

// console.log(newUser);
// const key = 'age';
// const { firstName: myname, lastName, [key]: myAge } = newUser;

// console.log(myname);
// console.log(myAge);

// const obj = {
//     a: 1,
//     b: 2, 
//     c: 3, 
//     d: {
//         l:1,
//         m: 2,
//         n: 3
//     }
// }

// const { a, ...rest} = obj;
// console.log(rest);

const newUser = {
    firstName: 'timmy',
    lastName: 'tagadtad',
    age: 7, 
    gender: 'male'
}

const newProp = 'profession';

//Mutable 
// newUser[newProp] = 'Trainer';
// newUser.age = 30;
// delete newUser.gender; 
// newUser.sex = 'male'; 
// newUser.fullname = `${newUser.firstName} ${newUser.lastName}`;
// delete newUser.firstName; 
// delete newUser.lastName;

// console.log(newUser);

//Immutable 
// const user1 = {...newUser, [newProp]: 'Trainer', age: 30, sex: 'male', fullname: `${newUser.firstName} ${newUser.lastName}`}

// const {gender, firstName, lastName, ...rest} = user1;

// console.log(user1);
// console.log(rest);

