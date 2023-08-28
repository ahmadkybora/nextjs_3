import PropTypes, { InferProps } from "prop-types";
import { useFormikContext } from "formik";
import React from 'react';

const ComponentPropTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const SubmitButton = ({ title, style }: ComponentTypes ) => {
    const { handleSubmit } = useFormikContext();
    return (
        <button 
            type="submit" 
            className={style}
            onClick={() => handleSubmit()}>
                {title}
        </button>
    );
};

SubmitButton.propTypes = ComponentPropTypes;

export default SubmitButton;
