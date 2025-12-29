import React from "react";
import { Route, Routes } from "react-router-dom";
import BoardListPage from "../pages/user/BoardListPage/BoardListPage";
import BoardDetailPage from "../pages/user/BoardDetailPage/BoardDetailPage";

function BoardRouter() {
    return (
        <>
            <Routes>
                <Route path="/list" element={<BoardListPage />} />
                <Route path="/:boardId" element={<BoardDetailPage />} />
            </Routes>
        </>
    );
}

export default BoardRouter;
