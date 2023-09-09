"use client";

import { Container } from "@/components";
import headerStyles from "./home.module.scss";
import { Avatar } from "@/components";
import avatarImage from "/public/images/profile/avatar.png";

const Header = () => {
    interface Styles {
        containerLogoAvatar?: string;
        header?: string;
    }
    const { containerLogoAvatar, header }: Styles = headerStyles;
    return(
        <>
            <Container style={header}>
                <Container style={containerLogoAvatar}>
                </Container>
                <Container style={containerLogoAvatar}>
                    <Avatar src={avatarImage.src} />
                </Container>
            </Container>
        </>
    );
}

export default Header;
