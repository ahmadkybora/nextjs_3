import PropTypes, { InferProps } from "prop-types";
import Image from "next/image";

const ComponentPropTypes = {
    src: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Avatar = ({ src }: ComponentTypes) => {
    const imgStyle = {
        border: "2px silver solid",
        borderRadius: "50%",
        margin: "3px 30px"  
    }
    return(
        <>
            <Image
                priority
                src={src}
                width={50}
                height={50}
                alt="Avatar"
                style={imgStyle}
                />
        </>
    );
}

Avatar.propTypes = ComponentPropTypes;

export default Avatar;
