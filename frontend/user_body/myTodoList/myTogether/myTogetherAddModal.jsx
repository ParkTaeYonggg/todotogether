import React from "react";
import { Link } from "react-router-dom";
import { BsGeoFill } from "react-icons/bs";

export default function MyTogetherContentAddModal ({profile, category, startDate, endDate, date, MyTogetherContentGauge, content}) {
    return (
        <div className="myTogetherContentAddModalWrapper">
            <section className="myTogetherContentAddModalSection1">
                <img src={profile} alt="사진"  className="myTogetherContentAddModalImg"/>
            </section>
            <section className="myTogetherContentAddModalSection2">
                <div>카테고리 : {category}</div>
                <div>기간 : {startDate} ~ {endDate}</div>
                <div>내용 : {content}</div>
                <div className="myTogetherContentEtcWrapper">
                    <span>달성치 {date}%</span>
                    <MyTogetherContentGauge date={date}/>
                </div>
                <Link>이동하기<BsGeoFill /></Link>
            </section>
        </div>
    )
}
