import React from "react"
import '../styles/signup.css'

const signUp = () => {
    return (
        <section className="sign-up">
            <div className="app-gutter">
                <div className="page-title">
                    <h2>회원가입</h2>
                </div>

                <div>
                    <form className="sign-up-form">
                        <div className="sign-up-email-input">
                            <label className="input-label">아이디(이메일)</label>
                            <div className="text-input-area">
                                <input
                                    className="text-input"
                                    placeholder="이메일 주소를 입력해주세요."
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
                        </div>
                        <div className="sign-up-password-input">
                            <label className="input-label">비밀번호</label>
                            <div className="text-input-area">
                                <input
                                    className="text-input"
                                    placeholder="비밀번호를 입력해주세요."
                                    name="password"
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
                            <div className="text-input-area">
                                <input
                                    className="text-input"
                                    placeholder="비밀번호를 다시 입력해주세요."
                                    name="password-check"
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
                        </div>
                        <div className="sign-up-cellphone-input">
                            <label className="input-label">휴대폰 번호</label>
                            <div className="text-input-area">
                                <input
                                    className="text-input"
                                    placeholder="휴대폰 번호를 입력해주세요."
                                    name="cell-phone"
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
                        </div>
                        <div>
                            <button type="submit" className="sign-up-btn">회원가입</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default signUp;