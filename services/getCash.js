import axios from "axios";

export const getCash = () => {
    return axios.get("https://tablecash.herokuapp.com/")
    .then((res) => {
        const {data} = res;
        return data;
    })
}