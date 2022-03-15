const initialData = {
    list: []
}

const todoReducers = (state=initialData, action) => {
    switch(action.type){
        case "ADDTODO" : 
        const{id, data} = action.payload;

        return{
            ...state,
            list:[
                {
                    id: id,
                    data: data 
                },
                ...state.list
            ]
        }

        case "DELETE_TODO" : 

        const newList = state.list.filter((elem) => elem.id !== action.id)

        return{
            ...state,
            list: newList
        }

        case "API_GET":
        const post = action.payload.data
        console.log(post)
        return{
            ...state,
            list: post.slice(0,5)
        }
        

        default: return state
    }
}

export default todoReducers;