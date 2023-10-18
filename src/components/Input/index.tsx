import PropTypes, { InferProps } from "prop-types";
import { useFormikContext, ErrorMessage } from "formik";

const ComponentPropTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Input = ({ type, name }: ComponentTypes) => {
    const { handleChange } = useFormikContext();
    return (
        <>
            <input
                className="w-full rounded-full   my-2 h-8"
                type={type}
                name={name}
                placeholder={name}
                onChange={handleChange(name)}
                />
            <span style={{ color: "red", paddingLeft: "10px" }}>
                <ErrorMessage name={name} />
            </span>
        </>
    );
};

Input.propTypes = ComponentPropTypes;

export default Input;
