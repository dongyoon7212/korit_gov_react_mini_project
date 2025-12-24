/** @jsxImportSource @emotion/react */
import { IoArrowBack } from "react-icons/io5";
import * as s from "./styles";

function SigninPage() {
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button>
                        <IoArrowBack />
                        뒤로가기
                    </button>
                </div>
                <div css={s.signinBox}>
                    <div css={s.topBox}>
                        <h4>로그인</h4>
                        <p>TechBoard에 오신 것을 환영합니다</p>
                    </div>
                    <div css={s.bottomBox}>
                        <div css={s.inputBox}>
                            <div>
                                <label htmlFor="">이메일</label>
                                <input
                                    type="text"
                                    placeholder="이메일을 입력해주세요"
                                />
                            </div>
                            <div>
                                <label htmlFor="">비밀번호</label>
                                <input
                                    type="text"
                                    placeholder="비밀번호를 입력해주세요"
                                />
                            </div>
                            <button>로그인</button>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
