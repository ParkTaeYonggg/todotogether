import React from "react";
import LeftSignup from "./leftSignup";
import RightSignup from "./rightSignup";
import EmptyChk from "../user_body_common/emptyChk";
import UseAxios from "../../common/useAxios";


export default function UserSignup () {
    const formData = new FormData(); 
    const callbackData = (type,e) => { formData.append(type,e) }
    const callback = (e) => {console.log(e)}
     // 서브밋핸들러
     const handlerSubmit = (e) => { 
        e.preventDefault();
        EmptyChk(e);
        
        UseAxios("api/user", callback, "post");
     }

    return (
        <div className="userCommonWrapper">
            <form className="userInfoInnerWrapper" onSubmit={e => handlerSubmit(e)}>
                <div className="userInfoDeepInnerWrapper">
                    <LeftSignup callbackData={callbackData}/>
                <div className="userInfoDeepRightInnerWrapper">
                    <RightSignup />    
                </div>
                </div>
                <button className="signupSendBtn commonUserSignupBtn">회원가입</button>
            </form>
        </div>
    );
}