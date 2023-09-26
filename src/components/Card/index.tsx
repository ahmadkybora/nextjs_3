import cardStyles from "./card.module.scss";
import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

const Card = ({ title, content }: ComponentTypes) => {
    interface Style {
        card?: string;
        cardBtn?: string;
        cardContent?: string;
        cardFooter?: string;
        cardTitle?: string;
    }
    const { card, cardContent, cardFooter, cardTitle, cardBtn }: Style = cardStyles;
    return(
        <div className={card}>
            <div className={cardTitle}>
                <p>{title}</p>
            </div>
            <div className={cardContent}>
                <p>{content}</p>
            </div>
            <div className={cardFooter}>
                <button>cancel</button>
                <button className={cardBtn}>save</button>
            </div> 
        </div>
    );
};

Card.propTypes = ComponentPropTypes;

export default Card;
