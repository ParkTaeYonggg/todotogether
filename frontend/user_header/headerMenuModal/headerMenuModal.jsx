import React, { useState } from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { theme } from "../../common/theme";
import { Link } from "react-router-dom";

export default function HeaderMenuModal () {
    const [modal, setModal] = useState(false);

    const handlerModal = () => { setModal(!modal) }

    return (
        <HeaderMenu_outerWrapper>
            <BsList style={{fontSize: "25px", cursor:"pointer"}} onClick={handlerModal}/>
            <HeaderMenu_Modal modal={modal}>
                <Link>회원정보</Link>
                <Link to="/goodbye">확인용(회원탈퇴)</Link>
                <Link>메뉴3</Link>
                <Link>메뉴4</Link>
                <Link>로그아웃</Link>
            </HeaderMenu_Modal>
        </HeaderMenu_outerWrapper>
    );
}

const HeaderMenu_outerWrapper = styled.div`
    position: relative;
    background-color: inherit;
`;
const HeaderMenu_Modal = styled.div`
    position: absolute;
    background-color: inherit;
    color: ${theme.titleColor};
    right: -90px;
    top: 50px;
    width: 0px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 20px;
    padding: 20px 0px 20px 0px;
    border-radius: 15px 0px 0px 15px;
    @keyframes slideModal {
        from { opacity: 0; }
        to { width: 200px; opacity: 1; }
    }
    @keyframes hideModal {
        from { width: 200px; }
        to { opacity: 0; }
    }
    animation: ${props => props.modal ? "slideModal 0.7s both linear" : "hideModal 0.7s both ease-out"};
`;