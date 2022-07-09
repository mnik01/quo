// import axios from "axios";

export const getTodos = async () => {
  try {
    // const response = await axios.get('/todos');
    return ['1', '2', '3']
  } catch (error) {
    console.error(error);
  }
}

export const postTodo = async (todo) => {

  // await axios.post('/todo', todo')

  return;
};
