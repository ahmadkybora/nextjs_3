"use client";

import loginStyles from "./login.module.scss";
import { Input, Form, Container, SubmitButton, Label } from "@/components";
import * as Yup from "yup";
import AuthServices from "@/services/auth.services";

const Login = () => {
    interface Style {
        loginContainer?: string;
        input?: string;
        loginBtn?: string;
        loginForm?: string;
    };
    interface IUser {
        password: string;
        username: string;
    };
    const { loginForm, loginContainer, input, loginBtn }: Style = loginStyles;
    const initialValues = {
        password: "",
        username: "",
    };
    const validationSchema = Yup.object().shape({
        password: Yup.string().required("password is required"),
        username: Yup.string().required("username is required")
    });
    const handleSubmit = (payload: IUser) => {
        console.log(payload);
        AuthServices.login(payload).then((res) => {
            console.log(res);
        });
    };
    return(
        <div>
            <Container style={loginContainer}>
                <Container style={loginForm}>
                    <Label title="Login" />
                    <Form
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        <Input 
                            type="name"
                            style={input}
                            name="username"
                            />
                        <Input
                            type="password"
                            style={input}
                            name="password"
                            />
                        <SubmitButton
                            title="Login"
                            style={loginBtn}
                            />
                    </Form>
                </Container>
            </Container>
        </div>
    );
}

export default Login;
