const api  = require('./api.js');

const getTodos = async () => {
    try {
        const { data } = await api.get("todos/")
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

//param id"
const getTodoParams = async (id) => {
    try {
        const { data } = await api.get(
            "todos/",
        {
            params: {
            id: id,
            },
        }
        );
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

//url id
const getTodo = async (id) => {
    try {
        const { data } = await api.get(`todos/${id}`);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

const addTodo = async () => {
    try {
        const response = await api.post(
            "todos",
            {
                title: "wash and dry dishes",
                completed: false,
            }
        );
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};

const putTodo= async () => {
    try {
        const response = await api.put(
            "todos/2",
            {
                title: "wash and dry dishes",
                completed: true,
            }
        );
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};

module.exports = { 
    getTodo,
    getTodoParams,
    getTodos,
    addTodo,
    putTodo
}