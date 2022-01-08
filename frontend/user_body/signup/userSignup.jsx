import React from "react";
import LeftSignup from "./leftSignup";
import RightSignup from "./rightSignup";
import EmptyChk from "../user_body_common/emptyChk";
import axios from "axios";


export default function UserSignup () {
    const formData = new FormData(); 
    const callbackData = (type,e) => { formData.append(type,e) }

     // 서브밋핸들러
     const handlerSubmit = (e) => { 
        e.preventDefault();
        EmptyChk(e);

        let url = {};
        for (const [k,v] of formData) {
            url = {...url, [k]:v}
        }
        axios.post("api/user/",url)
        .then(res => {
            if (res) {
                //페이지 홈으로
            } else {
                //회원창유지
            }
        });
     }

    return (
        <div className="userCommonWrapper">
            <form className="userInfoInnerWrapper" 
                  onSubmit={e => handlerSubmit(e)} 
                  encType="multipart/form-data"
                >
                <div className="userInfoDeepInnerWrapper">
                    <LeftSignup callbackData={callbackData}/>
                <div className="userInfoDeepRightInnerWrapper">
                    <RightSignup />    
                </div>
                </div>
                <button className="signupSendBtn commonUserSignupBtn">회원가입</button>
                {/* 조회, 수정페이지는 이부분이 다름 */}
            </form>
        </div>
    );
}