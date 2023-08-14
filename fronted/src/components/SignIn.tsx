import React from "react"
import '../styles/signin.css';
import {Button, Checkbox, TextField} from "@mui/material";

const SignIn = () => {
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
                                <input className="text-input" placeholder="이메일" name="email" type="text"/>
                            </div>
                            <div className="text-input-area">
                                <input className="text-input" placeholder="비밀번호" name="pwd" type="password"/>
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
                        <button className="sign-up-btn">이메일로 회원가입</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn;
