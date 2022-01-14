import React from "react";
import { BsFillPencilFill, BsCursorFill } from "react-icons/bs";
import SweetAlert from "../../../common/sweetAlert";

export default function MyTodoReWrite ({isUpdating = [], callbackUpdating, content, isCreating, callbackCreating, callbackTodoData}) {
    const handlerSendContent = () => {
        if (content.value.trim() === "") {
            SweetAlert("최소 한자라도 적어주세요.", "목표가 없으면 수정할 수 없어요.")
        } else {
            if (isCreating) {
                callbackCreating(false)
                callbackTodoData(false);
            } else if (isUpdating.value) {
                callbackUpdating({key: content.key, value:false})
            }
            // 업데이트 엑시오스
        }
    }
    return (
        <>
            {(isUpdating.key === content.key && isUpdating.value) || isCreating ? <BsCursorFill onClick={() => handlerSendContent()}/> : 
                          <BsFillPencilFill onClick={() => callbackUpdating({key: content.key, value:true})}/>}
        </>
    )
}