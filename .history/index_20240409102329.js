const axios = require('axios').default;

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

const addTodo = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          userId: 1,
          title: "wash and dry dishes",
          completed: false,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };