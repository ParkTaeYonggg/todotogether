import React from "react";
import UseAxios from "react";

export default function ValidityChk (e, callbackData, callback) {
    const ele = e.target;
    if (ele.value.trim() !== "") {
        const id = ele.id;
        const value = ele.value;
    // url, callback, post
        // UseAxios("api/user?"+id+"="+value,callback, "post");
        callbackData(id, value);

        // 여기 
    } 
}