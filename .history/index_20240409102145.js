const axios = require("axios");

const getTodos = async () => {
    try {
        const { data } = await axios.get(
           "https://jsonplaceholder.typicode.com/todos/" 
        )
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

//param id"
const getTodoParams = async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/`,
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
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
