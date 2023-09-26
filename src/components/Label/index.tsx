import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    title: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Label = ({ title }: ComponentTypes) => {
    return(
        <label>{title}</label>
    );
};

Label.propTypes = ComponentPropTypes;

export default Label;
