"use client";

import loginStyles from "./login.module.scss";
import { Input, Container, SubmitButton, Label } from "@/components";
import { Formik, Form, ErrorMessage } from 'formik';
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
    const initialValues: IUser = {
        password: "",
        username: "",
    };
    const validationSchema = Yup.object().shape({
        password: Yup.string().required("password is required"),
        username: Yup.string().required("username is required")
    });
    const handleSubmit = (payload: IUser) => {
        AuthServices.login(payload).then((res) => {
            console.log(res);
        });
    };
    return(
        <div>
            <Container style={loginContainer}>
                <Container style={loginForm}>
                    <Label title="Login" />
                    <Formik 
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                            <Form>
                                <Input 
                                    type="name"
                                    style={input}
                                    name="username"
                                    />
                                <span style={{ color: "red", paddingLeft: "10px" }}>
                                    <ErrorMessage name="username" />
                                </span>
                                <Input
                                    type="password"
                                    style={input}
                                    name="password"
                                    />
                                <span style={{ color: "red", paddingLeft: "10px" }}>
                                    <ErrorMessage name="password" />
                                </span>
                                <SubmitButton
                                    title="Login"
                                    style={loginBtn}
                                    />
                            </Form>
                    </Formik>
                </Container>
            </Container>
        </div>
    );
}

export default Login;
