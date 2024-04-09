let { getTodos } = require("./services.js")
let faker = require("faker")

var randomName = faker.name.findName()

getTodos();