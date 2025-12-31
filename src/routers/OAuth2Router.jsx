import React from "react";
import { Route, Routes } from "react-router-dom";
import OAuth2Page from "../pages/user/OAuth2Page/OAuth2Page";
import OAuth2MergePage from "../pages/user/OAuth2MergePage/OAuth2MergePage";

function OAuth2Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<OAuth2Page />} />
                <Route path="/merge" element={<OAuth2MergePage />} />
            </Routes>
        </>
    );
}

export default OAuth2Router;
