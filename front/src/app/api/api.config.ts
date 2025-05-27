import { environment } from "../../environments/environment";

export const API_ENDPOINTS = {
    login: `${environment.apiUrl}/users/login/`,
    register: `${environment.apiUrl}/users/register/`,
};