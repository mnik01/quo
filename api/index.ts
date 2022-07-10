import axios from "axios";

export const getTodos = async () => {
  console.log('fetching todos');
  try {
    await axios.get('https://jsonplaceholder.typicode.com/albums');
    return ['1', '2', '3']
  } catch (error) {
    console.error(error);
  }
}

export const postTodo = async (todo) => {

  // await axios.post('/todo', todo')

  return;
};
