import './App.css';
import {v4 as uniqueId} from 'uuid';

const Form = ({ input, todo, setInput, setTodo })=>{

    const handleInputChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        // Give the Todo {uniqueId, text, completed status}
        setTodo([...todo, {id: uniqueId(), text: input, completed: false}]);

         // Reset Input value after submit
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                type='text'
                placeholder='TODO Item'
                className='input'
                value={input}
                required
                onChange={handleInputChange}
                />
            <button type='submit' className='btn'>Add</button>
        </form>
    );
};

export default Form;