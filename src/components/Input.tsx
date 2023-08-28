import PropTypes, { InferProps } from "prop-types";
import { useFormikContext } from "formik";

const ComponentPropTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Input = ({ style, type, name }: ComponentTypes) => {
    const { handleChange } = useFormikContext();
    return (
        <input
            className={style}
            type={type}
            name={name}
            placeholder={name}
            onChange={handleChange(name)}
            />
    )
}

export default Input;
