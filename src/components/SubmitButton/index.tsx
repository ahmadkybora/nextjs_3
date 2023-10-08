import PropTypes, { InferProps } from "prop-types";
import { useFormikContext } from "formik";
import buttonStyle from "./submitButton.module.scss";

const ComponentPropTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    style: PropTypes.string,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const SubmitButton = ({ title, icon, style }: ComponentTypes ) => {
    const { handleSubmit } = useFormikContext();
    interface Style {
        defaultBtn?: string;
    }
    const { defaultBtn }: Style = buttonStyle;
    return (
        <button 
            type="submit" 
            className={style ? style : defaultBtn}
            onClick={() => handleSubmit()}>
                {title}
                {icon}
        </button>
    );
};

SubmitButton.propTypes = ComponentPropTypes;

export default SubmitButton;
