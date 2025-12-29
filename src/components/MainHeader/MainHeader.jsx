/** @jsxImportSource @emotion/react */
import { IoMenu } from "react-icons/io5";
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

function MainHeader({ showSideBar, setShowSideBar }) {
    const navigate = useNavigate();

    return (
        <div css={s.container}>
            <div css={s.leftBox}>
                <button onClick={() => setShowSideBar((prev) => !prev)}>
                    <IoMenu />
                </button>
                <div>TechBoard</div>
            </div>
            <div css={s.rightBox}>
                <button onClick={() => navigate("/auth/signin")}>로그인</button>
                <button onClick={() => navigate("/auth/signup")}>
                    회원가입
                </button>
            </div>
            <div css={s.sideBarContainer(showSideBar)}>
                <SideBar setShowSideBar={setShowSideBar} />
            </div>
        </div>
    );
}

export default MainHeader;
