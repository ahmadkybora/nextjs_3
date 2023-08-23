import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const SubmitButton = ({ title, style }: ComponentTypes ) => {
    return (
        <button 
            type="submit" 
            className={style}>
                {title}
        </button>
    )
}

SubmitButton.propTypes = ComponentPropTypes;

export default SubmitButton;
