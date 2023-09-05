import { httpService } from "./httpService";
import { IUser } from "@/app/(auth)/login/login.type";

class AuthServices {
    public static LoginUrl: string = "api/auth/login";

    public static async login(payload: IUser)
    {
        return await httpService(AuthServices.LoginUrl,
            {
                method: "POST",
                body: JSON.stringify(payload)
            });
    }
}

export default AuthServices;
