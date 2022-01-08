import React, { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function MemberWithdrawalSelect ({callbackValues, children}) {
    const [toggle, setToggle] = useState(false);
    const handlerOptions = () => { setToggle(!toggle) }

    const OPTIONS = [
        {key: "c1",value:"서비스 불만족"},
        {key: "c2",value:"더 좋은 페이지 발견"},
        {key: "c3",value:"더이상 사용 안 함"},
        {key: "c4",value:"목표완료"},
        {key: "c5",value:"직접입력"},
    ]
    const SelectTag = ({options, callbackValues}) => {
        return (
            <ul className="meberWithdrawal_ul" onClick={handlerOptions}>
                <span className="memberWithdrawl_ulTitle">{children}<BsFillArrowDownCircleFill/></span>
                {toggle ? <div className="memberWithdrawal_liWrapper">
                    {options.map(e => 
                        <li key={e.key}
                                value={e.key}
                                onClick={() => callbackValues(e.value)}>
                            {e.value}
                        </li>
                    )}
                    </div> : null}
            </ul>
        )
    }

    return (
        <SelectTag options={OPTIONS} 
                   callbackValues={callbackValues}/>
    );
}