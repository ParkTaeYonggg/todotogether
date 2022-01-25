import React, { useRef, useState, useEffect } from "react";
import alternative from "../../common/imgs/alternative.png";
import Certification from "../user_body_common/certification/certification";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function RightSignup () {
    const [ imgValue, setImgValue ] = useState();
    const state = useSelector(state => state.certificationReducer);

    // 파일 미리보기 및 벨류업데이트
    const handlerValue = (e) => {    
        if (e.target.files.length !== 0) {
            let fileData = e.target.files[0];
            const fileReader = new FileReader();

            fileReader.readAsDataURL(fileData, "utf-8");

            fileReader.onload = (res) => {
                imgRef.current.src = res.target.result;
            };
            setImgValue(fileData.name);
        };
    }

    //타겟
    let imgRef = useRef();

    return (
        <>  
            <img ref={e => imgRef.current = e} 
                 src={alternative}
                 onError={e => e.src = alternative} 
                 className="rightSignupUserImg"/>

            <StyledCertificationCommonDiv className="inputFile"
                                          isChked={state.isChked}>
                <input type="file"
                    name="profile"
                    id="profile"
                    onChange={e => handlerValue(e)}/>
            {state.isChked ? null : <Certification id="certificationRightSignupBtn">인증하기</Certification>}
            {/* 유알엘, 타입, 콜백함수 넣기 + 수정하기 누르면 loading프롭스 전달받아서 토글설정하기*/}
            </StyledCertificationCommonDiv>
        </>
    );
}

const StyledCertificationCommonDiv = styled.div`
    #certificationRightSignupBtn {
        top: 295px;
        padding: 5px 10px;
        display: inherit;
        width: 60px;
        height: 20px;
    }
    &::after { ${props => props.isChked ? "top:36px" : null} }

    @media screen and (max-width: 720px) {
       #certificationRightSignupBtn {
            top: 384px;
            padding: 0px 5px;
            left:63%; 
            position: absolute;
            height: 20px;
            display: none;
        }
        &::after { ${props => props.isChked ? "top:0px" : null} }
    }
`;

