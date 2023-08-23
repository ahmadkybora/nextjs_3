import Http from "./http.service";

interface IUser {
    password: string;
    username: string;
}

class AuthServices {
    public static async login(payload: IUser)
    {
        await Http.post(Http.baseUrl + "/api/auth/login", payload);
    }
}

export default AuthServices;
