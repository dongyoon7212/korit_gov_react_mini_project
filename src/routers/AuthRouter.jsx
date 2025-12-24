import { Route, Routes } from "react-router-dom";
import SigninPage from "../pages/user/SigninPage/SigninPage";

function AuthRouter() {
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SigninPage />} />
            </Routes>
        </>
    );
}

export default AuthRouter;
