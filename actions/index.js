import axios from "axios";

export const addTodo = (data) => async(dispatch) => {
    return(
        dispatch({
            type: 'ADDTODO',
            payload: {
                id: new Date().getTime().toString(),
                data: data
            }
        })
    )
}


export const deleteTodo = (id) => {
    return{
        type: 'DELETE_TODO',
        id
    }
}


export const apiGet = () => async(dispatch) => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data.data);
    return(
        dispatch({
            type: 'API_GET',
            payload: {
                data: data.data
            }
        })
    )
}