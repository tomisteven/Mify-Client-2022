import axios from "axios";

export const getMeses = () => {
    return axios.get("https://tablecash.herokuapp.com/Cash/meses/62f7417af39bf61aba34095d")
    .then((res) => {
        const {data} = res;
        return data;
    })  
}