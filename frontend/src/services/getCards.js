import backend from "./backendConfig";
import axios from "axios";

export const getCards = async (name, types, order) => {
    let url = `http://${backend.URL}:${backend.PORT}/cards`;
    url = `${url}?name=${name}&types=${JSON.stringify(types)}&order=${order}`;
    console.log("Types", types);
    const data = await axios.get(url);
    console.log(url)
    return data;
};
