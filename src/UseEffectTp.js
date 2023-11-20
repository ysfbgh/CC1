import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);

  const previous= () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <h1>get array by API</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button className='p-2 m-2 btn btn-danger' onClick={previous}>Previous</button>
      <button className='p-2 m-2 btn btn-success' onClick={next}>Next</button>
    </div>
  );
}
export default Api;
