"use client";

import loginStyles from "./login.module.scss";
import { Input, Div, SubmitButton } from "@/components";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import AuthServices from "@/services/auth.services";

const Login = () => {
    interface Style {
        loginContainer?: string;
        container?: string;
        input?: string;
        button?: string;
    }
    interface IUser {
        password: string;
        username: string;
    }
    const { loginContainer, container, input, button }: Style = loginStyles;
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
    }
    return(
        <div>
            <Div style={container}>
                <Div style={loginContainer}>
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
                                <span style={{ color: "red" }}>
                                    <ErrorMessage name="username" component="div" />
                                </span>
                                <Input
                                    type="password"
                                    style={input}
                                    name="password"
                                    />
                                <span style={{ color: "red" }}>
                                    <ErrorMessage name="password" component="div" />
                                </span>
                                <SubmitButton 
                                    title="Login"
                                    style={button}
                                    />
                            </Form>
                    </Formik>
                </Div>
            </Div>
        </div>
    );
}

export default Login;
