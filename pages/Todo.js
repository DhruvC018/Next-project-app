import React, { useState, useEffect } from 'react'
// import '../styles/globals.css'
import { AiFillDelete, AiFillPlusCircle } from 'react-icons/ai'
import { addTodo, removeTodo, deleteTodo, apiGet } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import todoReducers from '../reducer/todoReducers'
import axios from 'axios'

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch()

    const [posts,setPosts] = useState([]);
    
    
    useEffect(() => {
        dispatch(apiGet())
    },[])

    return (
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <figcaption>Add the content here</figcaption>
                </figure>

                <div className='addItems'>
                    <input 
                        type="text" 
                        placeholder='Add content'
                        value={inputData}
                        onChange={(evt) => setInputData(evt.target.value)}
                    />  
                    <AiFillPlusCircle className='fa fa-plus add-btn' onClick={() => {dispatch(addTodo(inputData));
                        setInputData('')}}/>
                </div>
                <div className='showItems'>
                {
                        list.map((elem) => {
                            return(
                            <div className='eachItem' key={elem.id}>
                                <h3>{elem.data || elem.title}</h3>
                                <div className='todo-btn'>
                                    <AiFillDelete className='fa fa-trash-alt add-btn' title="Delete Item" onClick={() => dispatch(deleteTodo(elem.id))}/>
                                </div>
                            </div>
                            )
                        })
                    }
                    {/* {
                        posts.map((elem) => {
                            return(
                            <div className='eachItem' key={elem.id}>
                                <h3>{elem.title}</h3>
                                <div className='todo-btn'>
                                    <AiFillDelete className='fa fa-trash-alt add-btn' title="Delete Item" onClick={() => dispatch(apiGet())}/>
                                </div>
                            </div>
                            )
                        })
                    } */}
                </div>

            </div>
        </div>

    )
}

export default Todo