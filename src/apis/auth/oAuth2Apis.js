import { instance } from "../utils/instance";

export const oAuth2MergeRequest = async (data) => {
    try {
        const response = await instance.post("/oauth2/merge", data);
        return response;
    } catch (error) {
        return error.response;
    }
};
