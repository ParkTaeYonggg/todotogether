import React, { useState } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import AnotherEmailModalContent from "../user_body_common/anotherEmailModalContent";
import CertificationInput from "./certification/certificationInput";
import Certification from "./certification/certification";
import { useSelector } from "react-redux";

export default function AnotherEmailModal () {
    const [modalEvent, setModalEvent] = useState(false);
    const state = useSelector(state => state.certificationReducer);

    const handlerModal = () => { setModalEvent(!modalEvent); };

    return (
        <div className="anotherModalBtnWrapper">
            <span onClick={handlerModal} className="anotherModalBtn" ><BsFillExclamationCircleFill/></span>
            {state.isChked ? null : <Certification id="certificationRightSignupBtn720px">인증하기</Certification>}
            {state ? <CertificationInput/> : null}
            {modalEvent ? <AnotherEmailModalContent onClick={handlerModal} /> : null}
        </div>
    );
}