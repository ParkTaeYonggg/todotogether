import React from "react";
import { BsTrashFill } from "react-icons/bs";

export default function MytodoDelete () {
    const handlerDeleteContent = () => {
        // 딜리트 엑시오스
        alert("삭제되었습니다.");
    }

    return (
        <BsTrashFill onClick={handlerDeleteContent} style={{cursor: "pointer"}}/>
    );
}