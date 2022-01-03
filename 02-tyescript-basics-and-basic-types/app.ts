// const person: {
//     name: string;
//     age: number;
// } 
const person = {
    name: 'Craig',
    age: 31,
    hobbies: ['Sports', 'Cooking']
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
};