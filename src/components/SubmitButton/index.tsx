import PropTypes, { InferProps } from "prop-types";
import { useFormikContext } from "formik";

const ComponentPropTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const SubmitButton = ({ title, icon }: ComponentTypes ) => {
    const { handleSubmit } = useFormikContext();
    return (
        <button 
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 flex rounded-full item-center h-8 mt-1"
            onClick={() => handleSubmit()}>
                {title}
                {icon}
        </button>
    );
};

SubmitButton.propTypes = ComponentPropTypes;

export default SubmitButton;
