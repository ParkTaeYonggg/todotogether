import React, { lazy, Suspense } from "react";
import {Route} from "react-router-dom";
import LoadingPage from "./common/loadingPage";

const LazyMainBody = lazy(() => import("./user_body/mainPage/mainBody"))
const LazySignup = lazy(() => import("./user_body/signup/userSignup"))
const LazyHeader = lazy(() => import("./user_header/header"))
const LazyFooter = lazy(() => import("./user_footer/footer"))
const LazyErrorPage = lazy(() => import("./common/errorPage"))
const LazyMemberWithdrawal = lazy(() => import("./user_body/memberWithdrawal/memberWithdrawal"))
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
            <Suspense fallback={<LoadingPage/>}>
                <Route path="/" component={LazyHeader} />
                <Route exact path="/" component={LazyMainBody} />
                <Route path="/signup" component={LazySignup} />
                <Route path="/goodbye" component={LazyMemberWithdrawal}/>
                <Route exact path="/errorPage" component={LazyErrorPage}/>
                <Route path="/" component={LazyFooter} />
            </Suspense>
        </>
    );
}