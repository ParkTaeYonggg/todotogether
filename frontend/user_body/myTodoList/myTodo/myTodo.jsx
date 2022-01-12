import React, { useEffect, useState }  from "react";
import MyTodoStatus from "./myTodoStatus";

export default function MyTodo () {
    const [todoStatus, setTodoStatus] = useState(true);

    const handlerTodo = () => setTodoStatus(true)
    const handlerDone = () => setTodoStatus(false)

    return (
        <div className="myTodoListWrapper">
        <div className="mytodoTitle">
            <span onClick={handlerTodo}>ToDo</span>
            <span onClick={handlerDone}>done</span>
        </div>
            {todoStatus ? <MyTodoStatus /> : <div>던</div>}
        </div>
    )
    
}