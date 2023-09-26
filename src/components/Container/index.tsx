import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    children: PropTypes.any,
    style: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Container = ({ children, style }: ComponentTypes) => {
    return (
        <div className={style}>{children}</div>
    );
};

Container.propTypes = ComponentPropTypes;

export default Container;
