import React, { useEffect, useState } from "react";
import ErrorPage from "./common/errorPage";
import {Route} from "react-router-dom";
import Header from "./user_header/header";
import MainBody from "./user_body/mainPage/mainBody";
import UserSignup from "./user_body/signup/userSignup";
import Footer from "./user_footer/footer";


import MemberWithdrawal from "./user_body/memberWithdrawal/memberWithdrawal";
// import UseAxios from "./common/useAxios";

// export const Authentication = React.createContext(null);

export default function App () { 
    // const search = window.location.search;
    // const params = new URLSearchParams(search);
    // const token = params.get("token");

    // const [authentication, setAuthentication] = useState(null);

    // const authenticate = () => {
    //     UseAxios(`autho/?token=${token}`,setAuthentication);
    // }
    // useEffect(()=>{
    //     authenticate();
    // },[]);

    return (
        <>
            <Route path="/" component={Header} />
            <Route exact path="/" component={MainBody} />
            <Route path="/signup" component={UserSignup} />

            <Route path="/goodbye" component={MemberWithdrawal}/>
            <Route exact path="/errorPage" component={ErrorPage}/>
            <Route path="/" component={Footer} />
        </>
    );
}