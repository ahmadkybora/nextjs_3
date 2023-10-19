import { Form, Input, SubmitButton } from "@/components";
import PropTypes, { InferProps } from "prop-types";
import * as Yup from "yup";
import { BiSearch } from "react-icons/bi";

const ComponentPropTypes = {
    name: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const SearchBox = ({ name }: ComponentTypes) => {
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
            <div className="flex flex-row items-center">
                <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                        <Input type="name" name={name} />
                        <SubmitButton title={name} icon={<BiSearch size={20} />} />
                    </Form>
            </div>
        </>
    )
}

export default SearchBox;
