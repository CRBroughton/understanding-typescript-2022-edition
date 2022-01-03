// const person: {
//     name: string;
//     age: number;
//     hobbies: string[]; // array of strings
//     role: [number, string]; // tuple type
// } = {
//     name: 'Craig',
//     age: 31,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role { ADMIN, READ_ONLY, AUTHOR }; // enums assign labels / constants to numbers / strings etc

const person = {
    name: 'Craig',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
};

if (person.role === Role.ADMIN) {
    console.log('Admin')
}

// person.role.push('admin') - Push is an exception; Will be allowed by TS even though it is a tuple
// person.role[1] = 10 - Tuple type cannot be overriden.