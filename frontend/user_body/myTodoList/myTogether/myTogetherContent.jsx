import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsTrashFill } from "react-icons/bs";
import { theme } from "../../../common/theme";

export default function MyTogetherContent ({profile, category, startDate, endDate}) {
    const [date, setDate] = useState("");

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
        <MyTogetherContentWrapper date={date}>
            <img src={profile} alt="사진" className="myTogetherContentImg"/>
            <span className="myTogetherContentCategory">{category}</span>
            <div className="myTogetherContentGaugeBar">
                <span>달성치</span>
                <span className="myTogetherContentGauge"></span>
                <span>{date}%</span>
            </div>
            <div className="myTogetherContentDate">{startDate} ~ {endDate}</div>
            <div className="myTogetherContentEtc">
                <BsTrashFill onClick={() => alert("삭제되었습니다.")}/>
            </div>
        </MyTogetherContentWrapper>
    )
}
const MyTogetherContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 18% 15% 37% 23% 7%;
    height: 70px;
    width: 100%;
    border-radius: 20px;
    box-shadow: inset 0px 0px 7px 0px;
    background-color: rgb(248,248,248);
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5vw;
    margin-bottom: 10px;
    cursor: pointer;

    .myTogetherContentGaugeBar {
        display: grid;
        grid-template-rows: 33% 33% 33%;
        align-items: center;
        justify-items: center;
        font-size: 1.3vw;
    }
    .myTogetherContentGauge {
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
    }

    .myTogetherContentImg { 
        width: 80%; 
        height: 60%; 
        justify-self: center; 
        border-radius: 15px; 
    }
    .myTogetherContentDate {
        font-size: 1.3vw;
    }
    .myTogetherContentEtc {
        justify-content: center;
    }
    .myTogetherContentCategory {
        justify-self: center;
    }
`;