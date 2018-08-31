import {host} from "./host";

export const getJson = (url) => {
    return fetch(
        `${host}${url}`
    )
        .then((resp) => resp.json())
        ;
};

