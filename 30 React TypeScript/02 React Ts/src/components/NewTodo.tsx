import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/TodosContext";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value

        if(enteredText.trim().length === 0) {
            return ;
        }

        todosCtx.addTodo(enteredText);
        todoTextInputRef.current!.value = '';
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;