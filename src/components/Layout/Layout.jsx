/** @jsxImportSource @emotion/react */
import MainHeader from "../MainHeader/MainHeader";
import * as s from "./styles";

function Layout({ children }) {
    return (
        <div css={s.container}>
            <MainHeader />
            {children}
        </div>
    );
}

export default Layout;
