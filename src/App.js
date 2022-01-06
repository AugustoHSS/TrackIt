import GlobalStyle from "./GlobalStyle";
import UserContext from "./contexts/UserContext";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Componets/MainPage"
import SingIn from "./Componets/SingIn"
import Habits from "./Componets/Habits"
import Today from "./Componets/Today"
import Historic from "./Componets/Historic"


export default function App() {
    const [loginResponse, setLoginResponse] = useState({})
    return (
        <UserContext.Provider value={{ loginResponse, setLoginResponse }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/cadastro" element={<SingIn />}></Route>
                    <Route path="/habitos" element={<Habits />}></Route>
                    <Route path="/hoje" element={<Today />}></Route>
                    <Route path="/historico" element={<Historic />}></Route>
                </Routes>
                <GlobalStyle />
            </BrowserRouter>
        </UserContext.Provider >
    )

}