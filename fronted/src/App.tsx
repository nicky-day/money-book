import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import SignUp from "./components/SignUp";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <Main>
                    <Routes>
                        <Route path="/account/signin" element={<SignIn/>}></Route>
                        <Route path="/account/signup" element={<SignUp/>}></Route>
                    </Routes>
                </Main>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
