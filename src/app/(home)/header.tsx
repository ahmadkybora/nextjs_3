"use client";

import { Container } from "@/components";
import headerStyles from "./home.module.scss";

const Header = () => {
    interface Styles {
        containerLogoHamburgerMenu?: string;
        header?: string;
    }
    const { containerLogoHamburgerMenu, header }: Styles = headerStyles;
    return(
        <>
            <Container style={header}>
                <Container style={containerLogoHamburgerMenu}>
                </Container>
            </Container>
        </>
    );
}

export default Header;
