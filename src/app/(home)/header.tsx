"use client";

import React from "react";
import { SearchBox } from "@/components";
import { Avatar } from "@/components";
import avatarImage from "/public/images/profile/avatar.png";

const Header = () => {
    return(
        <>
            <div className="w-screen flex flex-row justify-around p-2 h-16 border border-solid">
                <div>
                    <SearchBox 
                        name="search"
                        />
                </div>
                <div>
                    <Avatar src={avatarImage.src} />
                </div>
            </div>
        </>
    );
}

export default Header;
