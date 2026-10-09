const name = "Favour";
let age = 21;

age = age + 1;

console.log(`Hi, I'm ${name} and I'm ${age}`);
function greet(person) {
  return `Welcome, ${person}!`;
}
console.log(greet(name));
const skills = ["HTML", "CSS", "JavaScript"];
for (const skill of skills) {
  console.log(skill);
}
console.log(greet("Divine"));
const student = {
  name: "Favour",
  course: "Backend Development",
  skills: ["HTML", "CSS", "JavaScript"],
};

console.log(student.name);
console.log(student.skills[0]);
