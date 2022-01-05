import GlobalStyle from "./GlobalStyle";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./Componets/MainPage"
import SingIn from "./Componets/SingIn"
import Habits from "./Componets/Habits"
import Today from "./Componets/Today"
import Historic from "./Componets/Historic"


export default function App() {
    const [token, setToken] = useState("")
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage setToken={setToken} />}></Route>
                <Route path="/cadastro" element={<SingIn />}></Route>
                <Route path="/habitos" element={<Habits />}></Route>
                <Route path="/hoje" element={<Today token={token} />}></Route>
                <Route path="/historico" element={<Historic />}></Route>
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    )

}