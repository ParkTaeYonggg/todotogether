import React from "react";
import axios from "axios";
import { COMMONURL } from "../../common/url";

function ValidityChk (e, callbackData, callbackErrorMessage) {
    const ele = e.target;
    if (ele.value.trim() !== "") {
        const id = ele.name;
        const value = ele.value;
    // url, callback, post
        axios.post(`${COMMONURL}/api/user/valid`,{[id]:value})
        .then(res => console.log(res.data))
        .catch(() => {callbackErrorMessage("errorPage",true)})
        callbackData(id, value);
    } 
}

export default ValidityChk;