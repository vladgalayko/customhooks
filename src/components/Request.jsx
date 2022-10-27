import React from 'react';
import useRequest from '../hooks/useRequest';
import axios from 'axios';

const Request = () => {
    const [todos, loading, error] = useRequest(fetchTodos)

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }
    if (loading) {
       return  <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error</h1>
    }


    return (
        <div>
            {todos && todos.map(el =>
                   <div key={el.id} style={{padding: 30, border: '2px solid black'}}>{el.id}. {el.title}</div> 
                )}
        </div>
    );
};

export default Request;