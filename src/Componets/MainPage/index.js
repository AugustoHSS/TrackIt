import logo from '../../assets/Logo.png';
import axios from 'axios';
import Loader from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Input, Button, Form } from './style';

export default function MainPage() {
    const navigate = useNavigate();
    const { setLoginResponse } = useContext(UserContext);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    function doLogin(e) {
        e.preventDefault();
        setIsLoading(true)
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            {
                email: email,
                password: password
            })
        promisse.then(answer => { navigate("/hoje"); setIsLoading(false); setLoginResponse(answer.data); })
        promisse.catch(() => { setIsLoading(false); alert("Usuário ou senha inválidos.") })
    }
    return (
        <Container>
            <img src={logo} alt="Logo" />
            <Form onSubmit={doLogin}>
                <Input type="email" isLoading={isLoading} onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email" />
                <Input type="password" isLoading={isLoading} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="senha" />
                <Button isLoading={isLoading} disabled={isLoading} type="submit">
                    {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={45} width={70} /> : "Entrar"}
                </Button>
            </Form>
            <Link to={'/cadastro'}>Não tem uma conta? Cadastre-se!</Link >
        </Container>
    )

}
