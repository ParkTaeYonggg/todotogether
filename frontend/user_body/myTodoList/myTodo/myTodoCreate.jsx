import React, { useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import MyTodoContent from "./myTodoContent";

export default function MyTodoCreate ({isCreating, callbackCreating, callbackTodoData}) {
    useEffect(() => {
        if (!isCreating) return; 
        callbackTodoData(<MyTodoContent isCreating={isCreating}
                                        callbackCreating={callbackCreating}
                                        callbackTodoData={callbackTodoData}/>)
    },[isCreating])
    return (
        <>
            {isCreating ? <BsFillPlusCircleFill style={{color: "#dcdcdc"}}/> : 
                          <BsFillPlusCircleFill style={{cursor: "pointer"}}
                                                onClick={() => callbackCreating(true)} />}
        </>
    );
}