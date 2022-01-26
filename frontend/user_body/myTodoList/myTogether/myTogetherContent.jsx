import React, { useEffect, useState } from "react";
import "./myTogetherScss.scss";
import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { theme } from "../../../common/theme";
import MyTogetherContentAddModal from "./myTogetherAddModal";

export default function MyTogetherContent ({profile, category, startDate, endDate, content}) {
    const [date, setDate] = useState("");
    const [addModal, setAddModal] = useState(false);
    const handlerAddModal = () => { setAddModal(!addModal) }
    // 시간계산
    useEffect(() => {
        // 날짜데이터로 변환
        const startTemp = startDate.split("-");
        const endTemp = endDate.split("-");
        
        const startD = new Date(startTemp[0], startTemp[1]-1, startTemp[2])
        const endD = new Date(endTemp[0], endTemp[1]-1, endTemp[2])
        const nowD = new Date();
        
        // 날짜 차이 계싼
        const resDate = (endD.getTime() - startD.getTime()) / (1000 * 60 * 60 * 24);
        const resStart = ((nowD.getTime() - startD.getTime()) / (1000 * 60 * 60 * 24)-2);
        let result = Math.floor((resStart / resDate) * 100)

        if (result > 100) { result = 100; }
        setDate(result)
    },[])

    return (
        <>
            <div onClick={() => handlerAddModal()} className="myTogetherContentWrapper">
                <img src={profile} alt="사진" className="myTogetherContentImg"/>
                <span className="myTogetherContentCategory">{category}</span>
                <div className="myTogetherContentGaugeBar">
                    <span>달성치</span>
                    <MyTogetherContentGauge date={date}></MyTogetherContentGauge>
                    <span>{date}%</span>
                </div>
                <div className="myTogetherContentDate">{startDate} ~ {endDate}</div>
                <div className="myTogetherContentEtc">
                    <BsTrashFill onClick={() => alert("삭제되었습니다.")}/>
                </div>
            </div>
            {addModal ? <MyTogetherContentAddModal profile={profile}
                                                   category={category}
                                                   startDate={startDate}
                                                   endDate={endDate}
                                                   date={date} 
                                                   MyTogetherContentGauge={MyTogetherContentGauge}
                                                   content={content}/> : null}
        </>
    )
}
const MyTogetherContentGauge = styled.div`
    width: 80%;
    height: 3px;
    border-radius: 20px;
    background-color: #dcdcdc;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        width: ${props => props.date}%;
        height: 100%;
        background-color: ${theme.titleColor};    
    }
`;