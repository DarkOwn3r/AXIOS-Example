let { getTodos } = require("./services.js")
const { faker } = require('@faker-js/faker');

const randomName = faker.person.fullName();

console.log(randomName)