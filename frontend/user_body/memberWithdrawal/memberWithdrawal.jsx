import React, { useEffect, useState } from "react";
import "./memberWithdrawal.scss";
import MemberWithdrawalSelect from "./memberWithdrawalSelect";
import MemberWithdrawalFindPW from "./memberWithdrawalFindPW";
import axios from "axios";
import { COMMONURL } from "../../common/url";
import SweetAlert from "../../common/sweetAlert";
import { Link } from "react-router-dom";

export default function MemberWithdrawal () {
    const [selectValue, setSelectValue] = useState("탈퇴사유를 선택해주세요.");
    const [chkPw, setChkPw] = useState();

    // 콜백탈퇴사유
    const callbackValues = (e) => {
        setSelectValue(e); 
    }
    // 콜백비번
    const callbackChkPw = (e) => {
        setChkPw(e);
    }
    // 서브밋
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (chkPw) {
            axios.post(`${COMMONURL}/api/user/test2`,{email:"삭제요청"})
            SweetAlert("탈퇴했네?","ㅂㅇㅂㅇ~");
        } else {
            SweetAlert("비밀번호가 일치하지 않습니다.","비밀번호를 다시 작성해주세요.");
        }
    }
    // 리턴
    return (
        <div className="memberWithdrawal_outerWrapper">
            <h1>ToDoTogether</h1>
            <form className="memberWithdrawal_frm" onSubmit={e => handlerSubmit(e)}>
                <MemberWithdrawalSelect callbackValues={callbackValues}>
                    {selectValue}
                </MemberWithdrawalSelect>
                <div className="meberWithdrawal_div">
                    <span>탈퇴사유는 더 나은 서비스를 제공하는데 도움이 됩니다.</span>
                    <span>회원탈퇴 시 회원정보를 최대 5년간 보관하게 됩니다. 이후 회원님의 정보는 완전히 삭제됩니다.</span>
                </div>
                <MemberWithdrawalFindPW callbackChkPw={callbackChkPw}/>
                <button className="loginBtn memberWithdrawal_btn2">회원탈퇴</button>
            </form>
            <Link className="basicBtn" to="/">뒤로가기</Link>
        </div>
    );
}