import React, { useState } from "react";
import { togetherListDB } from "./myTogetherDB";
import MyTogetherContent from "./myTogetherContent";
import { BsCursor } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MyTogether () {
    const [choice, setChoice] = useState(true);
    const handlerChoice = (e) => { setChoice(e)}

    return (
        <div className="myTodoListWrapper">
            <div className="mytodoTitle">
                <span className="TodoTogetherChoiceBtn" onClick={() => handlerChoice(true)}>Together</span>
                <span className="TodoTogetherChoiceBtn" onClick={() => handlerChoice(false)}>done</span>
            </div>
            <Link>
                <h6 style={{margin: "0px", cursor: "pointer"}}>다른 사람들의 목표를 확인할 수 있어요. <BsCursor /></h6>
            </Link>
            <div className="mytodoContent">
                {choice ? togetherListDB.map(e => <MyTogetherContent profile={e.profile}
                                                            category={e.category}
                                                            startDate={e.stratDate}
                                                            endDate={e.endDate}/>) : <div>투게더 던</div> }
            </div>
        </div>
    )
}