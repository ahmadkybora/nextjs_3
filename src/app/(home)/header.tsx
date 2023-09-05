"use client";

import { Container } from "@/components";
import headerStyles from "./home.module.scss";

const Header = () => {
    interface Styles {
        header?: string;
    }
    const { header }: Styles = headerStyles;
    return(
        <>
            <Container style={header}>
                salam
            </Container>
        </>
    );
}

export default Header;
