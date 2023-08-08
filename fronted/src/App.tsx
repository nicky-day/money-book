import React from 'react';
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Routes>
                    <Route path="/account/signin" element={<SignIn/>}></Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
