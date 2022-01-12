import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../common/theme";
import StyledInput from "../../../common/StyledInput";

import MytodoDelete from "./myTodoDelete";
import MyTodoReWrite from "./myTodoReWrite";

export default function MyTodoContent ({isUpdating, callbackUpdating, isCreating, callbackCreating, callbackTodoData}) {
    const [content, setContent] = useState("");
    const handlerValue = (e) => setContent(e.target.value)
    return (
        <StyledMyTodoContentWrapper>
            <div className="myTodoInMyTodoContentWrapper1">
                <StyledInput id="myTodoContent"
                             name="content"
                             type="text"
                             labeling="내용"
                             value={content}
                             onChange={e => handlerValue(e)}
                             readonly={isUpdating || isCreating ? false : true}
                             />
            </div>
            <div className="myTodoInMyTodoContentWrapper2">
                <MyTodoReWrite isUpdating={isUpdating}
                               callbackUpdating={callbackUpdating}
                               value={content}
                               isCreating={isCreating}
                               callbackCreating={callbackCreating}
                               callbackTodoData={callbackTodoData} />
                <MytodoDelete />
            </div>
        </StyledMyTodoContentWrapper>
    )
}

const StyledMyTodoContentWrapper = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${theme.boxColor};
    border-radius: 20px;
    box-shadow: 0 0 3px 5px ${theme.boxColor};
    margin: 15px 0px;
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-items: center;
    .myTodoInMyTodoContentWrapper1 { width: 80%; }
    .myTodoInMyTodoContentWrapper2 { 
        display: flex; 
        justify-content: space-evenly; 
        width: 100%;
        svg { cursor: pointer; } 
    }
`;
