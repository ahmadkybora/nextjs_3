import { Container, Form, Input, SubmitButton } from ".";
import PropTypes, { InferProps } from "prop-types";
import * as Yup from "yup";
import inputStyle from "./input.module.scss";

const ComponentPropTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const SearchBox = ({ name, icon }: ComponentTypes) => {
    interface Style {
        input?: string;
    }
    const { input }: Style = inputStyle;
    const initialValues = {
        name: "",
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("name is required"),
    });
    const handleSubmit = (payload: string) => {
    };
    return(
        <>
            <Container style="">
                <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    <Input style={input} type="name" name={name} />
                        <SubmitButton title={name} icon={icon} />
                    </Form>
            </Container>
        </>
    )
}

export default SearchBox;
