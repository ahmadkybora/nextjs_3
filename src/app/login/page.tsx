"use client";

import loginStyles from "./login.module.scss";
import { Input, Form, Container, SubmitButton, Label } from "@/components";
import AuthServices from "@/services/auth.services";
import * as Yup from "yup";
import { IUser } from "./login.type";

const Page = () => {
    interface Style {
        loginContainer?: string;
        input?: string;
        loginBtn?: string;
        loginForm?: string;
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
        AuthServices.login(payload).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
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

export default Page;
