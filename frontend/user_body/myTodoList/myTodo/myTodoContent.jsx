import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../common/theme";
import StyledInput from "../../../common/StyledInput";

import MytodoDelete from "./myTodoDelete";
import MyTodoReWrite from "./myTodoReWrite";

export default function MyTodoContent ({ isUpdating = [], callbackUpdating, isCreating, callbackCreating, callbackTodoData, data = {key: "", value:""} }) {
    const [content, setContent] = useState(data);
    const handlerValue = (e) => setContent({ key:content.key, value: e.target.value})
    // 아래 프리브를 이용해서 기존의 값을 저장하고
    // 1. 변경값이 없을 때, 2. 변경값이 여백일 때, 3. 변경값이 다를 때 조건으로 뭔가 생성.
    const prevRef = useRef(content);
    useEffect(() => {
        if (!isUpdating.value && isUpdating !== undefined) {
            console.log(prevRef !== content)
        }
    },[isUpdating])
    return (
        <StyledMyTodoContentWrapper>
            <div className="myTodoInMyTodoContentWrapper1">
                <StyledInput id="myTodoContent"
                             name="content"
                             type="text"
                             labeling="내용"
                             value={content.value}
                             onChange={e => handlerValue(e)}
                             readonly={(isUpdating.value && isUpdating.key === content.key) || isCreating ? false : true}
                             />
            </div>
            <div className="myTodoInMyTodoContentWrapper2">
                <MyTodoReWrite isUpdating={isUpdating}
                               callbackUpdating={callbackUpdating}
                               content={content}
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
