"use client";

import { Container } from "@/components";
import sidebarStyles from "./home.module.scss";
import { IoIosArrowUp } from "react-icons/io";
import { IconContext } from "react-icons";
import { useRef, useState } from "react";

const Sidebar = () => {
    interface Styles {
        sidebar?: string;
    }
    const { sidebar }: Styles = sidebarStyles;
    const ref = useRef<HTMLUListElement>(null);
    const [display, setDisplay] = useState({ display: "none" });
    const setShow = () => {
        setDisplay({ display: "block" });
    }
    return(
        <>
            <Container style={sidebar}>
                <button onClick={() => setShow()}>Dashboard 
                    <IconContext.Provider value={{ style: { marginLeft: "50px"} }}>
                        <IoIosArrowUp />
                    </IconContext.Provider>
                </button>
                <ul style={display}>
                    <li>
                        <a href="#">First item</a>
                    </li>
                    <li>
                        <a href="#">Second item</a>
                    </li>
                    <li>
                        <a href="#">Third item</a>
                    </li>
                </ul>
            </Container>
        </>
    );
}

export default Sidebar;
