import { Form, Input, SubmitButton } from "@/components";
import PropTypes, { InferProps } from "prop-types";
import * as Yup from "yup";

const ComponentPropTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const SearchBox = ({ name, icon }: ComponentTypes) => {
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
            <div className="flex">
                <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                        <Input type="name" name={name} />
                        <SubmitButton title={name} icon={icon} />
                    </Form>
            </div>
        </>
    )
}

export default SearchBox;
