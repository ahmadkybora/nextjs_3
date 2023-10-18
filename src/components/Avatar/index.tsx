import PropTypes, { InferProps } from "prop-types";
import Image from "next/image";

const ComponentPropTypes = {
    src: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Avatar = ({ src }: ComponentTypes) => {
    return(
        <>
            <Image
                priority
                src={src}
                width={50}
                height={50}
                alt="Avatar"
                className="border-solid border-2 rounded-full"
                />
        </>
    );
}

Avatar.propTypes = ComponentPropTypes;

export default Avatar;
