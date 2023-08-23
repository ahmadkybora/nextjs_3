import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    title: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Label = ({ title, htmlFor }: ComponentTypes) => {
    return(
        <label htmlFor={htmlFor}>{title}</label>
    )
}

Label.propTypes = ComponentPropTypes;

export default Label;
