import React from "react";
import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function MyTodo () {
    return (
        <div className="myTodoListWrapper">
            <div className="mytodoTitle">
                <span>ToDo</span>
                <span>done</span>
            </div>
            <BsFillPlusCircleFill/>
            <div className="mytodoContent">
                2
            </div>
        </div>
    )
}