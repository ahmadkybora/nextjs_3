"use client";

import { Input, Form, SubmitButton, Label } from "@/components";
import AuthServices from "@/services/authServices";
import * as Yup from "yup";
import { IUser } from "./login.type";
import { success } from "@/providers/exceptionHandler";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const initialValues = {
        password: "",
        username: "",
    };
    const validationSchema = Yup.object().shape({
        password: Yup.string().required("password is required"),
        username: Yup.string().required("username is required")
    });
    const handleSubmit = (payload: IUser) => {
        AuthServices.login(payload)
            .then((res) => {
            success(res);
            setTimeout(() => {
                router.push("/");
            },1000);
        }).catch((err) => {
            console.log(err)
        });
    };
    return(
        <>
            <div className="flex items-center justify-center h-screen bg-no-repeat bg-cover bg-[url('../../public/images/login/login.png')]">
                <div className="border-solid border-1 w-80 h-80 bg-cyan-600 rounded-lg">
                    <Label title="Login" />
                    <Form
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        <Input 
                            type="name"
                            name="username"
                            />
                        <Input
                            type="password"
                            name="password"
                            />
                        <SubmitButton
                            title="Login"
                            />
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Login;
