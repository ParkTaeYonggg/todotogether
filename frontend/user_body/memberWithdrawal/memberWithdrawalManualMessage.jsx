import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function MemberWithdrawalManualMessage({inputRefTextArea}) {
    const [text, setText] = useState("");
    const handlerValue = (e) => { setText(e.target.value) }

    // 100자 제한
    useEffect(() => {
        if (Array.from(text).length > 100) {
            setText(text.substring(0,100))
        }
    },[text])
    return (
        <MemberWithdrawal_manualMessageTexDiv value={text}>
            <MemberWithdrawal_manualMessageTextArea rows="4"
                      className="memberWithdrawal_manualMessageTextArea"
                      value={text}
                      onChange={(e) => handlerValue(e)}
                      ref={inputRefTextArea}
                      />
        </MemberWithdrawal_manualMessageTexDiv>
    );
}

const MemberWithdrawal_manualMessageTextArea = styled.textarea`
    width: 90%;
    border-radius: 15px;
    padding: 10px;
    resize: none;
    transform: translate(0px, 12px);
`;
const MemberWithdrawal_manualMessageTexDiv = styled.div`
    position: relative;
    &::after {
        content: "${props => Array.from(props.value).length} / 100";
        position: absolute;
        right: 20px;
        top: 80px;
        font-size: 12px;
        color: ${props => Array.from(props.value).length >= 100 ? 'red' : 
                          Array.from(props.value).length > 49? 'orange' : 'black'};
    }
`;