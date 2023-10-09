import { Formik } from "formik";
import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    children: PropTypes.array,
    initialValues: PropTypes.any,
    onSubmit: PropTypes.any,
    validationSchema: PropTypes.object
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Form = ({
    children,
    initialValues,
    onSubmit,
    validationSchema
    }: ComponentTypes) => {
    return(
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {() => <>{children}</>}
        </Formik>
    );
};

Form.propTypes = ComponentPropTypes;

export default Form;
