import React, { useState } from "react";
import axios from "axios";
import { COMMONURL } from "../../common/url";
import StyledInput from "../../common/StyledInput";

export default function MemberWithdrawalFindPW ({callbackChkPw}) {
    const [password, setPassword] = useState();
    const handlerValue = (e) => { setPassword(e.target.value) }

        //비번찾기
    const handlerPwChk = () => {
        axios.get(`${COMMONURL}/api/user/test3`, {params: {password: password}})
        .then(res => callbackChkPw(res.data))
        .catch(error => console.log(error))
    }

    return (
        <>
            <StyledInput type="text"
                                name="password"
                                id="withDrawalPassword"
                                labeling="비밀번호"
                                value={password}
                                onChange={e => handlerValue(e)}
                                type="password"
                                placeholder="암호를입력해주세요."/>
            <div className="loginBtn memberWithdrawal_btn1" onClick={handlerPwChk}>일치확인</div>
        </>
    );
}