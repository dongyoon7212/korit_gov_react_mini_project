/** @jsxImportSource @emotion/react */
import { IoArrowBack } from "react-icons/io5";
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
    const navigate = useNavigate();
    const [signupInputValue, setSignupInputValue] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    const inputOnChangeHandler = (e) => {
        const { name, value } = e.target;

        setSignupInputValue((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const signupOnClickHandler = () => {
        if (
            signupInputValue.username.trim().length === 0 ||
            signupInputValue.email.trim().length === 0 ||
            signupInputValue.password.trim().length === 0 ||
            signupInputValue.passwordConfirm.trim().length === 0
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
    };
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate(-1)}>
                        <IoArrowBack />
                        뒤로가기
                    </button>
                </div>
                <div css={s.signupBox}>
                    <div css={s.topBox}>
                        <h4>회원가입</h4>
                        <p>TechBoard와 함께 시작하세요</p>
                    </div>
                    <div css={s.bottomBox}>
                        <div>
                            <label htmlFor="">이름</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="사용자 이름을 입력해주세요."
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.username}
                            />
                        </div>
                        <div>
                            <label htmlFor="">이메일</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="이메일을 입력해주세요."
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.email}
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.password}
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호 확인</label>
                            <input
                                name="passwordConfirm"
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요."
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.passwordConfirm}
                            />
                        </div>

                        <button>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
