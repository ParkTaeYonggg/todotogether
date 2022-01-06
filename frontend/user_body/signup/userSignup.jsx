import React from "react";
import LeftSignup from "./leftSignup";
import RightSignup from "./rightSignup";
import EmptyChk from "../user_body_common/emptyChk";
import UseAxios from "../../common/useAxios";


export default function UserSignup () {
    const formData = new FormData(); 
    // const formData = new URLSearchParams();
    const callbackData = (type,e) => { formData.append(type,e) }
    const callback = (e) => {alert(e)}

     // 서브밋핸들러
     const handlerSubmit = (e) => { 
        e.preventDefault();
        EmptyChk(e);

        
        let url = "user/test5?";
        for (const [k,v] of formData) {
            url += `&${k}=${v}`;
        }
        UseAxios(url, callback, "post", formData);
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
            </form>
        </div>
    );
}