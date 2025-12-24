import { Route, Routes } from "react-router-dom";
import SigninPage from "../pages/user/SigninPage/SigninPage";
import SignupPage from "../pages/user/SignupPage/SignupPage";

function AuthRouter() {
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    );
}

export default AuthRouter;
