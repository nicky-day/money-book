import React, {useState} from "react"
import '../styles/signin.css';
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const navigateToSignUp = () => {
        navigate("/account/signup")
    }

    return (
        <section className="sign-in">
            <div className="app-gutter">
                <div className="page-title">
                    <h2>로그인</h2>
                </div>
                <div>
                    <form className="sign-in-form">
                        <div className="sign-in-input">
                            <div className="text-input-area">
                                <input
                                    className="text-input"
                                    placeholder="이메일"
                                    name="email"
                                    type="text"
                                />
                                <button className="clear-btn">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><title>Reset</title>
                                        <circle cx="8" cy="8" r="8" fill="#9EA7AD"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M9.41418 10.1213C9.60944 10.3166 9.92602 10.3166 10.1213 10.1213C10.3165 9.92606 10.3165 9.60948 10.1213 9.41421L8.70707 8L10.1213 6.58579C10.3165 6.39052 10.3165 6.07394 10.1213 5.87868C9.92602 5.68342 9.60944 5.68342 9.41418 5.87868L7.99996 7.29289L6.58575 5.87868C6.39049 5.68342 6.07391 5.68342 5.87864 5.87868C5.68338 6.07394 5.68338 6.39052 5.87864 6.58579L7.29286 8L5.87864 9.41421C5.68338 9.60948 5.68338 9.92606 5.87864 10.1213C6.07391 10.3166 6.39049 10.3166 6.58575 10.1213L7.99996 8.70711L9.41418 10.1213Z"
                                              fill="white"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="text-input-area">
                                <input
                                    className="text-input"
                                    placeholder="비밀번호"
                                    name="pwd"
                                    type="password"
                                />
                                <button className="clear-btn">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"><title>Reset</title>
                                        <circle cx="8" cy="8" r="8" fill="#9EA7AD"></circle>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M9.41418 10.1213C9.60944 10.3166 9.92602 10.3166 10.1213 10.1213C10.3165 9.92606 10.3165 9.60948 10.1213 9.41421L8.70707 8L10.1213 6.58579C10.3165 6.39052 10.3165 6.07394 10.1213 5.87868C9.92602 5.68342 9.60944 5.68342 9.41418 5.87868L7.99996 7.29289L6.58575 5.87868C6.39049 5.68342 6.07391 5.68342 5.87864 5.87868C5.68338 6.07394 5.68338 6.39052 5.87864 6.58579L7.29286 8L5.87864 9.41421C5.68338 9.60948 5.68338 9.92606 5.87864 10.1213C6.07391 10.3166 6.39049 10.3166 6.58575 10.1213L7.99996 8.70711L9.41418 10.1213Z"
                                              fill="white"></path>
                                    </svg>
                                </button>
                            </div>
                            <p></p>
                        </div>
                        <button type="submit" className="login-submit">로그인</button>
                    </form>
                    <div className="password-reset">
                        <a href="#">비밀번호 재설정</a>
                    </div>
                    <div className="start-with-sns">
                        <button type="submit" className="start-with-naver-btn">네이버로 시작하기</button>
                        <button type="submit" className="start-with-facebook-btn">페이스북으로 시작하기</button>
                    </div>
                    <div>
                        <button className="sign-up-btn" onClick={navigateToSignUp}>이메일로 회원가입</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn;
