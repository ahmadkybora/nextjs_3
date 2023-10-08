"use client";

import { Container } from "@/components";
import headerStyles from "./home.module.scss";
import { SearchBox } from "@/components";
import { BiSearch } from "react-icons/bi";

const Header = () => {
    interface Styles {
        containerLogoHamburgerMenu?: string;
        containerSearchBox?: string;
        header?: string;
    }
    const { containerLogoHamburgerMenu, containerSearchBox, header }: Styles = headerStyles;
    return(
        <>
            <Container style={header}>
                <Container style={containerLogoHamburgerMenu}>
                </Container>
                <Container style={containerSearchBox}>
                    <SearchBox 
                        name="search" 
                        icon={<BiSearch />} 
                        />
                </Container>
                <Container style={containerLogoHamburgerMenu}>
                </Container>
            </Container>
        </>
    );
}

export default Header;
