import './App.css';

const Todos = ({todo, setTodo})=>{

    const deleteTodo = ({ id })=>{
        setTodo(todo.filter(item => item.id !== id));
    }

    const completedTodo = (todoItem)=>{
        setTodo(
            todo.map(item=>{
                if(item.id === todoItem.id){
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        )
    }

    return (
        todo.map(todoItem => (
            <section className='todoList'>
                <li className='todoItem' key={todoItem.id}>
                    <input
                        type='text'
                        readonly
                        value={todoItem.text}
                        onChange={e=>e.preventDefault()} // Prevent edit
                        className={todoItem.completed ? 'completed' : ''}
                    />

                    <button onClick={()=>deleteTodo(todoItem)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi      bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>

                    <button onClick={()=>completedTodo(todoItem)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                    </button>
                </li>
            </section>
        ))
    );
};

export default Todos;