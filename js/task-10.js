import users from "./users.js";

const getSortedUniqueSkills = users 
=>
    users.reduce((acc, user) =>
        [...user.skills, ...acc], [])
           .filter((itm, idx, arr) => arr.indexOf(itm) === idx)
        .sort();

console.log(getSortedUniqueSkills(users));