import React, { useEffect, useState }  from "react";
import { theme } from "../../../common/theme";
import MyTodoStatus from "./myTodoStatus";

export default function MyTodo () {
    const [todoStatus, setTodoStatus] = useState(true);

    const handlerTodo = () => setTodoStatus(true)
    const handlerDone = () => setTodoStatus(false)

    return (
        <div className="myTodoListWrapper">
        <div className="mytodoTitle">
            <span onClick={handlerTodo} style={{color: theme.adminFontColor2, cursor: "pointer"}}>ToDo</span>
            <span onClick={handlerDone} style={{color: theme.adminFontColor2, cursor: "pointer"}}>done</span>
        </div>
            {todoStatus ? <MyTodoStatus /> : <div>던</div>}
        </div>
    )
    
}