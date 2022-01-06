import axios from "axios";

export default function UseAxios ({url, callback, type, id}) {
    axios({
        url: url,
        method: type,
        baseURL: "http://54.180.218.232:8080/",
        withCredentials: true,
    })
    .then(res => {
        if (id !== undefined) {
            callback(id, res.data);
        } else {
            callback(res.data);
        }
        
    })
    .catch(error => {
        alert("관리자에게 문의하세요. (에러코드 : " + error + ")");
    })
}