import {getJson} from "./get-json";

export const usersApi = {
    getDetail: (username) => getJson(`users/${username}`)
};
