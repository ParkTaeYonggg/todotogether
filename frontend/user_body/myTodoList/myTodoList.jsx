import React from "react";
import "./myTodo.scss";
import styled from "styled-components";
import MyTodo from "./myTodo/myTodo";
import MyTogether from "./myTogether/myTogether";

export default function MyTodoList () {
    return (
        <StyledMyTodoListWrapper>
            <div className="myTodoListInnerWrapper">
                <MyTodo />
                <MyTogether />
            </div>
        </StyledMyTodoListWrapper>
    )
}

const StyledMyTodoListWrapper = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .myTodoListInnerWrapper {
        display: grid;
        grid-template-columns: 50% 50%;
        width: 80%;
        height: 400px;
        justify-items: center;
        align-items: center;

        .myTodoListContent1 {
            width: 90%;
            height: 100%;
            background-color: green;
        }
        .myTodoListContent2 {
            width: 90%;
            height: 100%;
            background-color: green;
        }
    }
`;