"use client";

import { Container } from "@/components";
import sidebarStyles from "./home.module.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";
import { useState } from "react";

const Sidebar = () => {
    interface Styles {
        sidebar?: string;
    }
    const { sidebar }: Styles = sidebarStyles;
    const [display, setDisplay] = useState({ display: "none" });
    const setShow = () => {
        if(display.display === "none") {
            setDisplay({ display: "block" });
        }
        if(display.display === "block") {
            setDisplay({ display: "none" });
        }
    }
    return(
        <>
            <Container style={sidebar}>
                <button onClick={() => setShow()}>Dashboard 
                {display.display === "none" ?
                    <IconContext.Provider value={{ style: { marginLeft: "50px"} }}>
                        <IoIosArrowUp />
                    </IconContext.Provider>
                : 
                    <IconContext.Provider value={{ style: { marginLeft: "50px"} }}>
                        <IoIosArrowDown />
                    </IconContext.Provider>
                }
                </button>
                <ul style={display}>
                    <li>
                        <a href="#">Commerce</a>
                    </li>
                </ul>
            </Container>
        </>
    );
}

export default Sidebar;
