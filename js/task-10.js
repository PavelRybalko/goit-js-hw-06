import users from "./users.js";

const getSortedUniqueSkills = (users) =>
  users
    .reduce((acc, user) => {
      user.skills.forEach((skill) => {
        if (!acc.includes(skill)) {
          acc.push(skill);
        }
      });

      return acc;
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users));
