import axios from "axios";
// import { useContext } from "react";
// import { Authentication } from "../app";

export default function UseAxios (url, callback, type, formData) {
    // const token = useContext(Authentication);
    for (const [i,j] of formData) {
        console.log(JSON.stringify(i));
        console.log(JSON.stringify(j));
    }
    

    if (type === "post") {
        const api = axios.create({ 
            baseURL: "http://54.180.218.232:8080/api/",
            headers: {
                Accept: 'application/json',
                ContentType: 'application/json',
            },
            withCredentials: true,
        });

        // api.defaults.headers.common.Authoriztion = `Bearer ${token}`;

        api.post(url, JSON.stringify(formData))
        .then(res => {
            // if (id !== undefined) {
            //     callback(id, res.data);
            // } else {
                callback(JSON.stringify(res.data));
            // }
            
        })
        .catch((error,response, status, headers) => {
            alert("관리자에게 문의하세요. (에러코드 : error : " + error + ")\n response : " + response + "\n status : " + status + "\n header : "+ headers);
        })
    } else if (type === "get") {
        const api = axios.create({
            headers: {
                Accept: "application/json",
                ContentType: "application/json"
            },
            baseURL: "http://54.180.218.232:8080/api",
            withCredential: true,
        });

        // api.defaults.headers.common.Authoriztion = `Bearer ${token}`;

        api.get(url,JSON.stringify(formData))
        .then(res => res.headers.authorization)
        .catch(error => alert("관리자에게 문의하세요. (에러코드 : " + error + ")"));
    }
}