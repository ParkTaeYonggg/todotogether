import React, { useState, useRef, useEffect } from "react";
import StyledInput from "../../common/StyledInput";
import AnotherEmailModal from "../user_body_common/anotherEmailModal";
import ValidityChk from "../user_body_common/validityChk";
import { useHistory } from "react-router";

export default function LeftSignup ({callbackData}) {
    const [values, setValues] = useState([]);
    const [error, setError] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

    // 유즈히스토리 -> 리덕스를 쓸까 아니면 좀 더 효율적인 방법이 있을까 찾아봐야겠다.
    const history = useHistory();
    useEffect(() => {
        if (errorMessage.errorPage) {
            history.push("/errorPage")
        }
    },[errorMessage])

    // 에러메시지가 온다면 이걸로 사틀드인풋의 content 변경하면 됨.
    const callbackErrorMessage = (type, e) => { setErrorMessage({...errorMessage, [type]:e}) }
    // 벨류핸들러
    const handlerValues = (type, e) => {
        setValues({ ...values, [type]: e.target.value });
    }
   
    // 유효성검사
    const handlervalidityChk = (e) => { ValidityChk(e, callbackData, callbackErrorMessage); 
    }
    const callback = (type,e) => { setError({...error, [type]:e}); }

    // 타겟
    let inputEmailRef = useRef();
    let inputPwRef = useRef();
    let inputNameRef = useRef();
    let inputNicknameRef = useRef();
    let inputPhoneRef = useRef();
    let inputAnotherEmailRef = useRef();
    let inputPwRef2 = useRef();

    return (
        <div className="userInfoDeepLeftInnerWrapper">
            <StyledInput id="email"
                         name="email"
                         type="email"
                         labeling="이메일"
                         value={values.email||""}
                         onChange={e => handlerValues("email", e)}
                         Ref={e => inputEmailRef = e}
                         error={error.email||""}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="특수문자 사용 불가능"
                         />
            <StyledInput id="signupPassword"
                         name="password"
                         type="password"
                         labeling="패스워드"
                         value={values.password||""}
                         onChange={e => handlerValues("password", e)}
                         Ref={e => inputPwRef = e}
                         error={error.password||""}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="특수문자 및 숫자 포함 8자 이상"
                         />
            <StyledInput id="password2"
                         name="password2"
                         type="password"
                         labeling="패스워드 확인"
                         value={values.password2||""}
                         onChange={e => handlerValues("password2", e)}
                         Ref={e => inputPwRef2 = e}
                         error={error.password2||""}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="특수문자 및 숫자 포함 8자 이상"
                         />
            <StyledInput id="name"
                         name="name"
                         type="text"
                         labeling="이름"
                         value={values.name||""}
                         onChange={e => handlerValues("name", e)}
                         Ref={e => inputNameRef = e}
                         error={error.name||""}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="특수문자 및 숫자 불가능"
                         />
            <StyledInput id="nickname"
                         name="nickname"
                         type="text"
                         labeling="닉네임"
                         value={values.nickname||""}
                         onChange={e => handlerValues("nickname", e)}
                         Ref={e => inputNicknameRef = e}
                         error={error.nickname||""}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="특수문자 불가능"
                         />
            <StyledInput id="phone"
                         name="phone"
                         type="phone"
                         labeling="전화번호"
                         value={values.phone||""}
                         onChange={e => handlerValues("phone", e)}
                         Ref={e => inputPhoneRef = e}
                         error={error.phone||""}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="ex) (-입력없이) 0109999999"
                         />
            <div>
            <StyledInput id="backupEmail"
                         name="backupEmail"
                         type="text"
                         labeling="다른이메일"
                         value={values.backupEmail||""}
                         onChange={e => handlerValues("backupEmail", e)}
                         Ref={e => inputAnotherEmailRef = e}
                         error={error.backupEmail||""}
                         onBlur={e => handlervalidityChk(e)}
                         placeholder="특수문자 사용 불가능"
                         />
            <AnotherEmailModal />
            </div>
        </div>
    );
}