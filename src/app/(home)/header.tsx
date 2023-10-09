"use client";

import { Container } from "@/components";
import headerStyles from "./home.module.scss";
import { SearchBox } from "@/components";
import { BiSearch } from "react-icons/bi";
import { Avatar } from "@/components";
import avatarImage from "/public/images/profile/avatar.png";

const Header = () => {
    interface Styles {
        containerLogoAvatar?: string;
        containerLogoHamburgerMenu?: string;
        containerSearchBox?: string;
        header?: string;
    }
    const { containerLogoHamburgerMenu, containerSearchBox, containerLogoAvatar, header }: Styles = headerStyles;
    return(
        <>
            <Container style={header}>
                <Container style={containerLogoHamburgerMenu}>
                </Container>
                <Container style={containerLogoAvatar}>
                </Container>
                <Container style={containerLogoAvatar}>
                    <Avatar src={avatarImage.src} />
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
