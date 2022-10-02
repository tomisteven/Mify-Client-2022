import axios from "axios";

export const getPriceDolar = () => {
    return axios.get("https://api.bluelytics.com.ar/v2/latest")
    .then((res) => {
        const {data} = res;
        return data;
    })  
}