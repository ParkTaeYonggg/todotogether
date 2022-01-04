import axios from "axios";

export default function UseAxios ({url, callback, type, id}) {
    axios({
        url: url,
        method: type,
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