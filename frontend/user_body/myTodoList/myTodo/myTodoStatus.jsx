import React, { useState, useEffect } from "react";
import MyTodoContent from "./myTodoContent";
import MyTodoCreate from "./myTodoCreate";

export default function MyTodoStatus () {
    const [isUpdating, setIsUpdating] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [todoData, setTodoData] = useState();
    //tempData
    const [tempData, setTempData] = useState([{key:"zz",value:"임시내용입니다.1"},{key:"qq",value:"임시내용입니다.2"}]);
    ///////////
    //업데이트 콜배함수
    const callbackUpdating = (e) => { setIsUpdating(e); }

    ///////////////////////////
    // 크리에이트 콜백함수 // 투두생성콜백
    const callbackCreating = (e) => { setIsCreating(e) }
    const callbackTodoData = (e) => { setTodoData(e) }
    ///////////////////////////
    useEffect(() => {
        // 업데이트 혹은 생성 후에 다시 재랜더 해줄 유즈이팩트
    },[])
    return (
       <>
            <MyTodoCreate isCreating={isCreating}
                          callbackCreating={callbackCreating}
                          callbackTodoData={callbackTodoData}/>
            <div className="mytodoContent">
                {todoData ? todoData : null}
                {tempData.map((e) => 
                    <MyTodoContent callbackUpdating={callbackUpdating}
                                   isUpdating={isUpdating}
                                   data={{key: e.key, value: e.value}}/>
                )}
                    {/* 이런식으로 포문으로 데이터 넣어줄 것임 key는 아마 id값이 될 것임. */}
            </div>
        </>
     
    )
}